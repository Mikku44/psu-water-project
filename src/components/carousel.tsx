'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'
import { getCarouselImages } from '@/app/repositories/carousels'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay()]
  )
  const [imageList, setImageList] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    getCarouselImages().then((result) => setImageList(result.sort()))
  }, [])

  // update when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <div className="embla relative ">
      
      {/* Carousel viewport */}
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container">
          {imageList?.map((image, index) => (
            <div key={index} className="embla__slide max-h-[500px]">
              <img
                src={image}
                alt={`carousel-${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
         {/* Dots */}
      <div className="embla__dots flex justify-center gap-2 mt-3 z-[99]   bottom-0 p-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full duration-200 border-2 border-[var(--color-primary)] ${
              index === selectedIndex ? 'bg-[var(--color-primary)]' : ''
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      </div>

     
    </div>
  )
}
