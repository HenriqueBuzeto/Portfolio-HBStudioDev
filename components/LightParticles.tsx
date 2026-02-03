'use client'

import React from 'react'

interface LightParticlesProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function LightParticles({ 
  className = '',
  intensity = 'medium'
}: LightParticlesProps) {
  const particleCount = {
    low: 20,
    medium: 35,
    high: 50
  }[intensity]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: particleCount }, (_, i) => {
        const size = Math.random() * 2.5 + 1.5
        const left = Math.random() * 100
        const top = Math.random() * 100
        const delay = Math.random() * 5
        const duration = Math.random() * 8 + 8
        
        return (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30 dark:bg-primary/40 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 ${size * 3}px rgba(109, 40, 217, 0.5), 0 0 ${size * 6}px rgba(139, 92, 246, 0.3)`,
            }}
          />
        )
      })}
    </div>
  )
}
