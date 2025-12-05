"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export default function ConfessionPage() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showMessage, setShowMessage] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    setShowMessage(true)
  }, [])

  // Generate floating hearts on click
  const handleHeartClick = () => {
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 10,
    }
    setHearts([...hearts, newHeart])

    // Remove heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float-up opacity-0"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              animation: "float-up 2s ease-out forwards",
            }}
          >
            <Heart className="text-accent animate-heart-beat" size={32} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Header animation */}
          <div
            className={`text-center transition-all duration-1000 ${
              showMessage ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="mb-8 flex justify-center">
              <Heart className="text-accent animate-pulse-glow" size={64} fill="currentColor" />
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-sans">
              <span className="inline-block animate-float-up stagger-1">Anh</span>
              <span className="mx-3 inline-block">💝</span>
              <span className="inline-block animate-float-up stagger-2">Khánh Ly</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light animate-float-up stagger-3">
              Có những lời nói không đủ để diễn tả tình yêu, nhưng tim này biết
            </p>

            {/* Description */}
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-lg border border-accent/20 animate-float-up stagger-4">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                ✨ Bạn là những ngôi sao trong bầu trời đêm của anh
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                💫 Mỗi khoảnh khắc bên bạn đều quý giá vô cùng
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                🌹 Anh muốn dành tất cả những ngày tươi đẹp cho bạn
              </p>
            </div>

            {/* Interactive buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-float-up stagger-5">
              <button
                onClick={handleHeartClick}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg transition-all hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
              >
                💕 Em cũng yêu anh
              </button>
              <button
                onClick={() => setScale(scale === 1 ? 1.1 : 1)}
                className="px-8 py-4 bg-primary/10 text-primary rounded-full font-semibold text-lg border-2 border-primary transition-all hover:bg-primary/20 active:scale-95"
              >
                ❤️ Chia sẻ
              </button>
            </div>
          </div>

          {/* Floating elements decoration */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-8 text-foreground/50 text-sm">
        <p>Với tất cả tình yêu ❤️</p>
      </div>
    </main>
  )
}
