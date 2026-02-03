'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

interface OptimizedParticlesProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function OptimizedParticles({ 
  className = '',
  intensity = 'medium'
}: OptimizedParticlesProps) {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0])
  }, [])

  const particleCount = {
    low: 30,
    medium: 50,
    high: 70
  }[intensity]

  return (
    <Particles
      id={`optimized-particles-${intensity}`}
      init={particlesInit}
      className={className}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#6D28D9', '#8B5CF6', '#A78BFA', '#C4B5FD'],
          },
          links: {
            color: '#8B5CF6',
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: particleCount,
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
              minimumValue: 0.5,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 5, max: 10 },
            animation: {
              enable: true,
              speed: 4,
              sync: false,
              minimumValue: 4,
            },
          },
          shadow: {
            enable: true,
            blur: 20,
            color: '#6D28D9',
            offset: {
              x: 0,
              y: 0,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
