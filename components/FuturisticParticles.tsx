'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

interface FuturisticParticlesProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function FuturisticParticles({ 
  className = '',
  intensity = 'medium'
}: FuturisticParticlesProps) {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0])
  }, [])

  const particleCount = {
    low: 30,
    medium: 80,
    high: 150
  }[intensity]

  return (
    <Particles
      id="futuristic-particles"
      init={particlesInit}
      className={className}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: ['push', 'bubble'],
            },
            onHover: {
              enable: true,
              mode: ['grab', 'repulse', 'bubble'],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 250,
              duration: 0.8,
              factor: 100,
              speed: 1,
            },
            bubble: {
              distance: 250,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: ['#6D28D9', '#8B5CF6', '#A78BFA', '#C4B5FD'],
          },
          links: {
            color: '#6D28D9',
            distance: 180,
            enable: true,
            opacity: 0.4,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.1,
            },
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1.5,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: particleCount,
          },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          shadow: {
            blur: 5,
            color: '#6D28D9',
            enable: true,
            offset: {
              x: 0,
              y: 0,
            },
          },
        },
        detectRetina: true,
        style: {
          filter: 'blur(0.5px)',
        },
      }}
    />
  )
}
