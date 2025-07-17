import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Phone } from "lucide-react"
import Image from "next/image"
import AnnouncementBar from "@/components/announcement-bar"

export const metadata = {
  title: "Pricing | Just In Call Packers and Movers",
  description:
    "Transparent pricing for local and domestic shifting services in Tirupati. Get estimated costs for 1 BHK, 2 BHK, 3 BHK, and 4/5 BHK moves.",
}

export default function PricingPage() {
  const localShiftingPrices = [
    {
      size: "1 BHK",
      packing: "₹1,000 – ₹2,500",
      labor: "₹1,500 – ₹3,500",
      transport: "₹1,500 – ₹3,000",
      total: "₹4,000 – ₹9,000",
    },
    {
      size: "2 BHK",
      packing: "₹1,500 – ₹3,500",
      labor: "₹2,000 – ₹4,500",
      transport: "₹2,000 – ₹4,500",
      total: "₹5,500 – ₹12,500",
    },
    {
      size: "3 BHK",
      packing: "₹1,500 – ₹5,500",
      labor: "₹2,500 – ₹5,500",
      transport: "₹2,500 – ₹6,000",
      total: "₹6,500 – ₹17,000",
    },
    {
      size: "4/5 BHK",
      packing: "₹2,000 – ₹8,000",
      labor: "₹2,500 – ₹6,500",
      transport: "₹3,000 – ₹6,500",
      total: "₹7,500 – ₹21,000",
    },
  ]

  const domesticMovingPrices = [
    {
      size: "1 BHK",
      km100_350: "₹15,000 – ₹24,500",
      km350_750: "₹17,500 – ₹26,500",
      km750_1200: "₹19,500 – ₹27,000",
      km1200_1700: "₹23,000 – ₹33,500",
    },
    {
      size: "2 BHK",
      km100_350: "₹19,500 – ₹27,500",
      km350_750: "₹21,000 – ₹32,500",
      km750_1200: "₹24,000 – ₹34,500",
      km1200_1700: "₹28,500 – ₹40,000",
    },
    {
      size: "3 BHK",
      km100_350: "₹22,500 – ₹33,500",
      km350_750: "₹25,500 – ₹39,500",
      km750_1200: "₹27,500 – ₹41,000",
      km1200_1700: "₹32,500 – ₹46,500",
    },
    {
      size: "4/5 BHK",
      km100_350: "₹26,000 – ₹37,000",
      km350_750: "₹30,500 – ₹40,500",
      km750_1200: "₹32,500 – ₹50,500",
      km1200_1700: "₹40,500 – ₹54,500",
    },
  ]

  return (
    <div className="bg-jic-light-gray dark:bg-gray-900">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center overflow-hidden">
        <Image
          src="/images/delivery-exchange.jpeg"
          alt="Transparent Pricing"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Transparent Pricing
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-200">
            Clear and affordable rates for all your relocation needs. Get an estimate for your move.
          </p>
        </div>
      </section>

      {/* Enhanced Announcement Bar for Pricing */}
      <AnnouncementBar
        messages={[
          "💰 BEST VALUE: Most competitive rates in Tirupati - guaranteed lowest prices!",
          "✅ NO HIDDEN COSTS: What you see is what you pay - 100% transparent pricing!",
          "📞 INSTANT QUOTES: Get personalized pricing in under 2 minutes via WhatsApp!",
          "💯 PRICE MATCH: Found a lower quote? We'll beat it by 10% - challenge accepted!",
          "🎁 SEASONAL OFFERS: Special discounts available - ask about current promotions!",
          "📋 FREE ESTIMATES: Detailed cost breakdown provided at no charge!",
        ]}
        bgColor="bg-gradient-to-r from-emerald-600 to-cyan-600"
        textColor="text-white"
        duration="35s"
      />

      {/* Local Shifting Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
              Local Shifting (Within Tirupati)
            </h2>
            <p className="max-w-[800px] mx-auto text-jic-gray md:text-lg dark:text-gray-300">
              Estimated costs for moving within Tirupati, including packing, labor, and transport charges. Prices may
              vary based on specific requirements and distance.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg dark:border-gray-700">
            <Table>
              <TableHeader>
                <TableRow className="bg-jic-red text-white hover:bg-jic-red dark:bg-jic-red dark:hover:bg-jic-red">
                  <TableHead className="min-w-[120px] text-white">Moving Size</TableHead>
                  <TableHead className="min-w-[150px] text-white">Packing Charges</TableHead>
                  <TableHead className="min-w-[150px] text-white">Labor Charges</TableHead>
                  <TableHead className="min-w-[150px] text-white">Transport Charges</TableHead>
                  <TableHead className="min-w-[180px] text-white">Total Approx Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {localShiftingPrices.map((row, index) => (
                  <TableRow key={index} className="even:bg-jic-light-gray/50 dark:even:bg-gray-800/50">
                    <TableCell className="font-medium text-jic-black dark:text-white">{row.size}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.packing}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.labor}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.transport}</TableCell>
                    <TableCell className="font-semibold text-jic-red dark:text-jic-red">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Domestic Moving Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-light-gray dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
              Domestic Moving (City to City)
            </h2>
            <p className="max-w-[800px] mx-auto text-jic-gray md:text-lg dark:text-gray-300">
              Estimated costs for long-distance moves across different cities, based on distance ranges. These prices
              are indicative and can vary based on volume, specific services, and route.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg dark:border-gray-700">
            <Table>
              <TableHeader>
                <TableRow className="bg-jic-red text-white hover:bg-jic-red dark:bg-jic-red dark:hover:bg-jic-red">
                  <TableHead className="min-w-[120px] text-white">Moving Size</TableHead>
                  <TableHead className="min-w-[180px] text-white">100–350 KM</TableHead>
                  <TableHead className="min-w-[180px] text-white">350–750 KM</TableHead>
                  <TableHead className="min-w-[180px] text-white">750–1200 KM</TableHead>
                  <TableHead className="min-w-[180px] text-white">1200–1700 KM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {domesticMovingPrices.map((row, index) => (
                  <TableRow key={index} className="even:bg-white dark:even:bg-gray-800">
                    <TableCell className="font-medium text-jic-black dark:text-white">{row.size}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.km100_350}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.km350_750}</TableCell>
                    <TableCell className="text-jic-gray dark:text-gray-300">{row.km750_1200}</TableCell>
                    <TableCell className="font-semibold text-jic-red dark:text-jic-red">{row.km1200_1700}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-12 text-center">
            <p className="text-jic-gray dark:text-gray-300 text-lg mb-6">
              For a precise quote tailored to your specific moving needs, please contact us directly.
            </p>
            <Button
              asChild
              className="bg-jic-red hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <a
                href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20custom%20quote%20for%20my%20move."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" /> Get a Custom Quote on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Disclaimer/FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <Card className="p-6 shadow-xl bg-jic-light-gray dark:bg-gray-800 border-jic-red border-l-4">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Info className="h-8 w-8 text-jic-red" />
              <CardTitle className="text-2xl font-bold text-jic-black dark:text-white">
                Important Pricing Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-jic-gray dark:text-gray-300">
              <p>The prices listed are approximate estimates and can vary based on several factors, including:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Volume and type of goods to be moved.</li>
                <li>Specific packing requirements (e.g., fragile items, special equipment).</li>
                <li>Distance of relocation and accessibility of locations.</li>
                <li>Additional services requested (e.g., storage, insurance).</li>
                <li>Time of year (peak seasons may have different rates).</li>
              </ul>
              <p className="font-semibold">
                We recommend contacting us directly for a personalized and accurate quote tailored to your exact needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
