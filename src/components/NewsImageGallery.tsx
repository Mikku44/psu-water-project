'use client'

import React from 'react'
// 1. Import the components
import { PhotoProvider, PhotoView } from 'react-photo-view'
// 2. Import the required styles
import 'react-photo-view/dist/react-photo-view.css';

interface NewsImageGalleryProps {
  imageUrls: string[]
  title: string
}

export default function NewsImageGallery({ imageUrls, title }: Readonly<NewsImageGalleryProps>) {
  
  if (imageUrls.length === 0) {
    return null
  }

  return (
    // 1. Wrap the entire gallery grid with PhotoProvider
    <PhotoProvider
      // Optional props for customization (e.g., enable drag, hide close button, etc.)
      speed={() => 800} // Custom transition speed
      maskOpacity={0.85} // Darken the backdrop
      // Setting zIndex to ensure it appears above all other page elements
      photoClosable={true} 
    >
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {imageUrls.map((img, idx) => (
          // 2. Wrap each image with PhotoView
          <PhotoView
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            // Optional: Set a custom caption that appears inside the preview
            // Use the title prop of PhotoView for the image alt/description inside the viewer
            title={`${title} Image ${idx + 1}`} 
          >
            {/* The actual image element that users click on */}
            <img
              src={img}
              alt={`${title} gallery image ${idx + 1}`}
              className='w-full rounded-lg object-cover cursor-pointer break-inside-avoid shadow-md hover:shadow-lg transition-shadow duration-300'
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}