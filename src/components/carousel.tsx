'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'
import { getCarouselImages } from '@/app/repositories/carousels'

export function EmblaCarousel () {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [imageList, setImageList] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    getCarouselImages().then(result => setImageList(result.sort()))
  }, [])

  // update when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setIsLoading(false)
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <div className=' relative '>
      {isLoading && <div className="w-full min-h-[80vh]
      flex justify-center items-center">
        <img src="/icons/loading.png" className='size-[30px] relative bottom-0 m-5 animate-spin' /></div>}
      {/* Carousel viewport */}
      <div className='embla__viewport relative' ref={emblaRef}>
        <div className='embla__container'>
          {imageList  ? imageList.map((image, index) => (
            <div key={index} className='embla__slide max-h-[500px]'>
              <img
                src={image}
                alt={`carousel-${index}`}
                className='h-full w-full object-cover'
              />
            </div>
          ))
        : <div className="flex h-full w-full justify-center  items-center">
          <img src="/icons/loading.png" className='size-[30px] animate-spin' />
        </div>
        }
        </div>
      </div>
      {/* Dots */}
      <div className='embla__dots flex justify-center gap-2 mt-3 z-[99] absolute  bottom-0 p-5'>
        
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
  )
}
