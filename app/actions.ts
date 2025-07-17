"use server"

import { revalidatePath } from "next/cache"

/**
 * Revalidates the /gallery path to ensure the latest images are displayed.
 * This function should be called after any changes to the gallery_images table (e.g., upload, delete).
 */
export async function revalidateGalleryPath() {
  revalidatePath("/gallery")
  console.log("Revalidated /gallery path")
}
