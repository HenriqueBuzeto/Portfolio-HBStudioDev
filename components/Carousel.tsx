'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FALLBACK_IMAGE = 'https://via.placeholder.com/1920x1080?text=Imagem+Indisponível'

interface CarouselImage {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  objectFit?: 'cover' | 'contain'
  href?: string
}

interface CarouselProps {
  images: CarouselImage[]
  className?: string
}

export default function Carousel({ images, className = '' }: CarouselProps) {
  const [failedIds, setFailedIds] = useState<Set<string>>(new Set())

  const getImageSrc = (image: CarouselImage) =>
    failedIds.has(image.id) ? FALLBACK_IMAGE : image.src

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-[280px] min-[480px]:h-[380px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] rounded-lg overflow-hidden"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            {image.href ? (
              <Link href={image.href} className="block relative w-full h-full cursor-pointer">
                <div className="relative w-full h-full bg-muted/30">
                  <Image
                    src={getImageSrc(image)}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
                    className={image.objectFit === 'contain' ? 'object-contain' : 'object-cover'}
                    priority={image.id === images[0].id}
                    onError={() => setFailedIds((prev) => new Set(prev).add(image.id))}
                  />
                  {(image.title || image.description) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          {image.title && (
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                              {image.title}
                            </h3>
                          )}
                          {image.description && (
                            <p className="text-lg sm:text-xl text-white/90">
                              {image.description}
                            </p>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div className="relative w-full h-full bg-muted/30">
                <Image
                  src={getImageSrc(image)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
                  className={image.objectFit === 'contain' ? 'object-contain' : 'object-cover'}
                  priority={image.id === images[0].id}
                  onError={() => setFailedIds((prev) => new Set(prev).add(image.id))}
                />
                {(image.title || image.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {image.title && (
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                            {image.title}
                          </h3>
                        )}
                        {image.description && (
                          <p className="text-lg sm:text-xl text-white/90">
                            {image.description}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
