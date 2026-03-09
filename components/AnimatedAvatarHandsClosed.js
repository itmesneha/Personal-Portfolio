'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Animation sequence: 1, 2, 3, 4, 3, 2, 1, 5
const frameSequence = [1, 2, 1, 5]

export default function AnimatedAvatar({ width = 650, height = 650, fps = 8 }) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const intervalDuration = 2000 / fps // milliseconds per frame
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frameSequence.length)
    }, intervalDuration)

    return () => clearInterval(interval)
  }, [fps, isPaused])

  const currentFrame = frameSequence[currentFrameIndex]

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="relative h-full w-full">
        <Image
          src={`/static/images/sneha_animation_hands_closed/${currentFrame}.png`}
          alt="Animated avatar"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}
