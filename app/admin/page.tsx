"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Upload, ImageIcon, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { revalidateGalleryPath } from "@/app/actions" // Import the new server action

interface GalleryImage {
  id: string
  url: string
  name: string
  uploaded_at: string
}

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [imageName, setImageName] = useState("")
  const [uploading, setUploading] = useState(false)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [loadingImages, setLoadingImages] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // In a real app, you'd check for a session token or similar
    // For this demo, we'll assume a fresh login is needed each time
    // or you could use localStorage for a persistent (but insecure) demo login state.
    // For now, we'll keep it simple and require login.
  }, [])

  const fetchGalleryImages = async () => {
    setLoadingImages(true)
    const { data, error } = await supabase
      .from("gallery_images")
      .select("id, url, name, uploaded_at")
      .order("uploaded_at", { ascending: false })

    if (error) {
      console.error("Error fetching gallery images:", error)
      toast({
        title: "Error",
        description: "Failed to load existing gallery images.",
        variant: "destructive",
      })
    } else {
      setGalleryImages(data || [])
    }
    setLoadingImages(false)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "shipping") {
      setIsLoggedIn(true)
      fetchGalleryImages() // Fetch images after successful login
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setImageName(e.target.files[0].name.split(".")[0]) // Pre-fill name from filename
    } else {
      setFile(null)
      setImageName("")
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an image to upload.",
        variant: "destructive",
      })
      return
    }

    setUploading(true)
    const fileName = `${Date.now()}-${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("gallery-images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })

    if (uploadError) {
      console.error("Error uploading image:", uploadError)
      toast({
        title: "Upload Failed",
        description: `Error: ${uploadError.message}`,
        variant: "destructive",
      })
      setUploading(false)
      return
    }

    const { data: publicUrlData } = supabase.storage.from("gallery-images").getPublicUrl(uploadData.path)

    const publicUrl = publicUrlData.publicUrl

    const { data: insertData, error: insertError } = await supabase
      .from("gallery_images")
      .insert([{ url: publicUrl, name: imageName || file.name, uploaded_at: new Date().toISOString() }])

    if (insertError) {
      console.error("Error inserting image URL into DB:", insertError)
      toast({
        title: "Database Error",
        description: `Failed to save image info: ${insertError.message}`,
        variant: "destructive",
      })
      // Optionally, delete the uploaded file from storage if DB insert fails
      await supabase.storage.from("gallery-images").remove([uploadData.path])
    } else {
      toast({
        title: "Upload Successful",
        description: "Image uploaded and added to gallery!",
      })
      setFile(null)
      setImageName("")
      fetchGalleryImages() // Refresh the list of images
      await revalidateGalleryPath() // Revalidate the gallery page
    }
    setUploading(false)
  }

  const handleDeleteImage = async (imageId: string, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this image?")) {
      return
    }

    // Extract file path from URL
    const urlParts = imageUrl.split("/")
    const fileNameInStorage = urlParts[urlParts.length - 1]
    // Supabase storage remove expects just the file name within the bucket, not the full path
    // The path is usually bucket_name/file_name, but remove function takes file_name directly if from() is used with bucket name.
    // Let's ensure we get just the file name from the public URL.
    const pathSegments = new URL(imageUrl).pathname.split("/")
    const fileNameForStorage = pathSegments[pathSegments.length - 1]

    // Delete from Supabase Storage
    const { error: storageError } = await supabase.storage.from("gallery-images").remove([fileNameForStorage])

    if (storageError) {
      console.error("Error deleting image from storage:", storageError)
      toast({
        title: "Deletion Failed",
        description: `Failed to delete image file: ${storageError.message}`,
        variant: "destructive",
      })
      return
    }

    // Delete from Supabase Database
    const { error: dbError } = await supabase.from("gallery_images").delete().eq("id", imageId)

    if (dbError) {
      console.error("Error deleting image from database:", dbError)
      toast({
        title: "Deletion Failed",
        description: `Failed to remove image record: ${dbError.message}`,
        variant: "destructive",
      })
      // Optionally, if DB delete fails but storage succeeded, you might want to re-upload or log for manual cleanup
    } else {
      toast({
        title: "Image Deleted",
        description: "Image successfully removed from gallery.",
      })
      fetchGalleryImages() // Refresh the list
      await revalidateGalleryPath() // Revalidate the gallery page
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-jic-light-gray dark:bg-gray-900">
        <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-jic-black dark:text-white">Admin Login</CardTitle>
            <CardDescription className="text-jic-gray dark:text-gray-300">
              Enter your credentials to access the gallery management panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-gray-700 text-jic-black dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="shipping"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-gray-700 text-jic-black dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <Button type="submit" className="w-full bg-jic-red hover:bg-red-700 text-white">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32 bg-jic-light-gray dark:bg-gray-900">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-12 text-jic-black dark:text-white">
        Gallery Admin Panel
      </h1>

      <Card className="mb-12 p-6 shadow-xl bg-white dark:bg-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-jic-black dark:text-white">Upload New Image</CardTitle>
          <CardDescription className="text-jic-gray dark:text-gray-300">
            Add new images to your website gallery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="imageFile">Image File</Label>
              <Input
                id="imageFile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="bg-gray-50 dark:bg-gray-700 text-jic-black dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageName">Image Name/Description</Label>
              <Input
                id="imageName"
                placeholder="e.g., Office Shifting in Tirupati"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                required
                className="bg-gray-50 dark:bg-gray-700 text-jic-black dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>
            <Button type="submit" className="w-full bg-jic-red hover:bg-red-700 text-white" disabled={uploading}>
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="p-6 shadow-xl bg-white dark:bg-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-jic-black dark:text-white">Existing Gallery Images</CardTitle>
          <CardDescription className="text-jic-gray dark:text-gray-300">
            Manage your uploaded gallery images.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loadingImages ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-jic-red" />
              <span className="ml-2 text-jic-gray dark:text-gray-300">Loading images...</span>
            </div>
          ) : galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative group overflow-hidden rounded-lg shadow-md aspect-video transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.name || "Gallery image"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-jic-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white text-sm font-semibold text-center mb-2">{image.name}</p>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteImage(image.id, image.url)}
                      className="flex items-center gap-1 bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-jic-gray dark:text-gray-400">
                No images uploaded yet. Use the form above to add some!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
