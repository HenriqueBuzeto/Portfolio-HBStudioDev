'use client'

import dynamic from 'next/dynamic'

const ParticlesBg = dynamic(() => import('@/components/ParticlesBg'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden />,
})

interface ParticlesBgLazyProps {
  className?: string
}

export default function ParticlesBgLazy({ className = '' }: ParticlesBgLazyProps) {
  return <ParticlesBg className={className} />
}
