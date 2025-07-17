import React from "react"

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
  bgColor = "bg-jic-red",
  textColor = "text-white",
  duration = "30s",
}: AnnouncementBarProps) {
  return (
    <div className={`w-full ${bgColor} ${textColor} py-3 overflow-hidden relative z-50 shadow-md`}>
      <div className="announcement-bar">
        <span
          className="text-sm font-medium px-4 inline-block whitespace-nowrap animate-scroll-left"
          style={{ animationDuration: duration }}
        >
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              {msg} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Add spacing between messages */}
            </React.Fragment>
          ))}
          {/* Duplicate messages to ensure continuous scroll without a gap */}
          {messages.map((msg, index) => (
            <React.Fragment key={`dup-${index}`}>
              {msg} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  )
}
