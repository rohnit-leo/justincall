interface AnnouncementBarProps {
  messages?: string[]
  bgColor?: string
  textColor?: string
  duration?: string
}

export default function AnnouncementBar({
  messages = [
    "🚚 Best Packers and Movers in Tirupati – Safe. Fast. Affordable. Just One Call Away!",
    "📞 Call us 24x7 for a free quote: 9989113003, 9908181947",
    "📦 Special discounts for office shifting this month!",
    "⭐ Trusted by thousands of happy customers in Andhra Pradesh!",
    "🏡 End-to-end home relocation services – stress-free moving guaranteed!",
  ],
  bgColor = "bg-gradient-to-r from-jic-red via-red-600 to-jic-red",
  textColor = "text-white",
  duration = "120s",
}: AnnouncementBarProps) {
  // Create seamless continuous content by duplicating messages multiple times
  const separator = " • "
  const singleLoop = messages.join(separator) + separator

  // Create enough content to ensure seamless looping (duplicate content multiple times)
  const seamlessContent = Array(6).fill(singleLoop).join("")

  return (
    <div
      className={`w-full ${bgColor} ${textColor} py-3 overflow-hidden relative z-40 shadow-lg border-b-2 border-white/20`}
    >
      <div className="announcement-bar">
        <div className="announcement-content text-sm font-medium px-4" style={{ animationDuration: duration }}>
          {seamlessContent}
        </div>
      </div>
    </div>
  )
}
