'use client'

import { deleteCarouselImage, getCarouselImages, uploadCarouselImage } from '@/app/repositories/carousels'
import { useState, useEffect } from 'react'
import { Upload, Trash2, RefreshCw, X, Image as ImageIcon } from 'lucide-react'

export default function CarouselImageUploader() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  // Load images on component mount
  useEffect(() => {
    handleFetchAll()
  }, [])

  // Auto-hide messages after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [message])

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      setFiles(droppedFiles)
    }
  }

  const handleUpload = async () => {
    if (!files) return
    setUploading(true)
    try {
      const uploadedUrls = await uploadCarouselImage(Array.from(files))
      if (uploadedUrls && uploadedUrls.length > 0) {
        setImages((prev) => [...uploadedUrls, ...prev])
        showMessage('success', `Successfully uploaded ${uploadedUrls.length} image(s)`)
        setFiles(null)
        // Clear the file input
        const fileInput = document.getElementById('file-input') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        showMessage('error', 'No images were uploaded')
      }
    } catch (err) {
      console.error('Upload failed:', err)
      showMessage('error', 'Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleFetchAll = async () => {
    setLoading(true)
    try {
      const urls = await getCarouselImages()
      setImages(urls)
      if (urls.length === 0) {
        showMessage('success', 'No images found')
      }
    } catch (err) {
      console.error('Fetch failed:', err)
      showMessage('error', 'Failed to load images')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (imageUrl: string) => {
    // Extract path from URL for deletion
    const pathMatch = imageUrl.match(/carousel-images\/([^?]+)/)
    if (!pathMatch) {
      showMessage('error', 'Invalid image path')
      return
    }
    
    const fullPath = `carousel-images/${pathMatch[1]}`
    setDeleting(imageUrl)
    
    try {
      const ok = await deleteCarouselImage(fullPath)
      if (ok) {
        setImages((prev) => prev.filter((img) => img !== imageUrl))
        showMessage('success', 'Image deleted successfully')
      } else {
        showMessage('error', 'Failed to delete image')
      }
    } catch (err) {
      console.error('Delete failed:', err)
      showMessage('error', 'Failed to delete image')
    } finally {
      setDeleting(null)
    }
  }

  const clearFiles = () => {
    setFiles(null)
    const fileInput = document.getElementById('file-input') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carousel Image Manager</h1>
          <p className="text-gray-600">Upload, view, and manage your carousel images</p>
        </div>

        {/* Message Alert */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg border ${
            message.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center justify-between">
              <span>{message.text}</span>
              <button onClick={() => setMessage(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Upload className="w-5 h-5 mr-2 text-blue-600" />
            Upload Images
          </h2>
          
          {/* Drag & Drop Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragOver 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">
              Drop images here or click to browse
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Support for multiple images (JPEG, PNG, WebP)
            </p>
            
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          {/* Selected Files Display */}
          {files && files.length > 0 && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-700">
                  Selected Files ({files.length})
                </h3>
                <button
                  onClick={clearFiles}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </button>
              </div>
              <div className="space-y-1">
                {Array.from(files).map((file, idx) => (
                  <div key={idx} className="text-sm text-gray-600 flex items-center">
                    <ImageIcon className="w-4 h-4 mr-2 text-gray-400" />
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleUpload}
              disabled={uploading || !files}
              className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {uploading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Images
                </>
              )}
            </button>

            <button
              onClick={handleFetchAll}
              disabled={loading}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Refresh
            </button>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-green-600" />
              Image Gallery ({images.length})
            </h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
              <span className="ml-3 text-gray-600">Loading images...</span>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No images found</p>
              <p className="text-gray-400">Upload some images to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img, idx) => (
                <div key={idx} className="group relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square">
                    <img
                      src={img}
                      alt={`Carousel image ${idx + 1}`}
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => setSelectedImage(img)}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(img)}
                    disabled={deleting === img}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-700 disabled:opacity-50 transition-all duration-200 shadow-lg"
                    title="Delete image"
                  >
                    {deleting === img ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 flex items-center"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Full size preview"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )}