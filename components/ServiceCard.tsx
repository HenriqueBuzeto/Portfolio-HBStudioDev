'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Service } from '@/data/services'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const discountPercent =
    service.originalPrice && service.originalPrice > service.price
      ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
      : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`h-full flex flex-col relative overflow-hidden transition-all hover:shadow-xl ${
          service.popular
            ? 'border-primary border-2 shadow-lg scale-105'
            : 'hover:border-primary/50'
        }`}
      >
        {service.popular && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
            <Star size={12} fill="currentColor" />
            Mais vendido
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-2xl">{service.title}</CardTitle>
          <CardDescription className="text-base">{service.description}</CardDescription>
          {service.tagline && (
            <p className="text-sm font-medium text-primary mt-1">{service.tagline}</p>
          )}
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="mb-6 space-y-1.5">
            {service.discountLabel ? (
              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="inline-flex bg-red-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  {service.discountLabel}
                </span>
              </p>
            ) : service.originalPrice && (
              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span>
                  De <span className="line-through">{formatPrice(service.originalPrice)}</span>
                </span>
                {discountPercent != null && (
                  <span className="inline-flex bg-red-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    -{discountPercent}%
                  </span>
                )}
              </p>
            )}
            <p className="text-xl sm:text-2xl font-bold text-primary leading-tight">
              {service.priceLabel
                ? `${service.priceLabel} ${formatPrice(service.price)}`
                : `Por ${formatPrice(service.price)} à vista no PIX`}
            </p>
            {service.installmentsTimes && (
              <p className="text-sm text-muted-foreground">
                {service.priceLabel
                  ? `Parcelamentos até ${service.installmentsTimes}x no cartão`
                  : `ou ${service.installmentsTimes}x de ${formatPrice(
                      Math.ceil((service.originalPrice ?? service.price) / service.installmentsTimes)
                    )} no cartão`}
              </p>
            )}
          </div>

          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Link href="/contact">Solicitar Orçamento</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
