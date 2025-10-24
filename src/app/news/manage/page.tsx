'use client'

import React, { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { IoIosTrash, IoIosSave, IoMdCreate, IoIosAddCircle, IoMdCloseCircle, IoMdImages, IoIosPulse, IoMdAlert } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'

// Note: Assuming these imports are correct based on your file structure
import {
  insertNewsWithImage,
  updateNews,
  deleteNews,
  getAllNews
} from '@/app/repositories/newsClient'
import { INews } from '@/app/models/newsModel'

// --- Types for Content Block ---
interface ContentBlock {
  type: string
  text: string
}

interface NewsAdminProps {
  initialNews?: INews[]
}

// Helper to generate a URL-safe slug from text
const toSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Helper to create a unique slug by appending a UUID
const createUniqueSlug = (title: string, customSlug?: string): string => {
  const baseSlug = customSlug && customSlug.trim() !== '' ? toSlug(customSlug) : toSlug(title)
  const uniqueId = uuidv4().split('-')[0]
  return `${baseSlug}-${uniqueId}`
}

const PRIMARY_COLOR = 'blue' // Set a single, professional accent color

export default function NewsAdminPage({ initialNews = [] }: NewsAdminProps) {
  const [newsList, setNewsList] = useState<INews[]>(initialNews)
  const [form, setForm] = useState<
    Omit<INews, 'id' | 'created_at' | 'image_url'>
  >({
    slug: '',
    title: '',
    description: '',
    content: { data: [] as ContentBlock[] }
  })
  const [files, setFiles] = useState<File[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [alertMessage, setAlertMessage] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isAction, setIsAction] = useState(false);

  // Clear the alert message after a few seconds
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [alertMessage])

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setEditingId(null)
    setForm({ slug: '', title: '', description: '', content: { data: [] } })
    setFiles([])
    setSlugManuallyEdited(false)
  }, [])

  // Show a status alert
  const showAlert = (type: 'success' | 'error' | 'info', message: string) => {
    setAlertMessage({ type, message })
  }

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Custom handler for title to allow auto-filling the slug
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setForm(prev => ({
      ...prev,
      title: newTitle,
      slug: !prev.slug.trim() || !slugManuallyEdited ? toSlug(newTitle) : prev.slug,
    }))
  }

  const handleContentChange = (
    value: string,
    index: number,
    field: 'text' | 'type'
  ) => {
    const newData = [...form.content.data] as ContentBlock[]
    newData[index] = { ...newData[index], [field]: value }
    setForm({ ...form, content: { data: newData } })
  }

  const handleAddContent = (type: ContentBlock['type'] = 'paragraph') => {
    setForm({
      ...form,
      content: { data: [...form.content.data, { type, text: '' }] as ContentBlock[] }
    })
  }

  const handleRemoveContent = (index: number) => {
    setForm(prev => ({
      ...prev,
      content: { data: prev.content.data.filter((_, i) => i !== index) }
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, idx) => idx !== index))
  }

  const handleInsert = async () => {
    if (!form.title.trim()) {
      showAlert('error', 'Title is required to create a news item.')
      return
    }
    if (files.length === 0) {
      showAlert('error', 'At least one image is required.')
      return
    }

    setIsLoading(true)
    const finalSlug = createUniqueSlug(form.title, form.slug)

    try {
      const newsToInsert = { ...form, slug: finalSlug }
      const newNews = await insertNewsWithImage(newsToInsert, files)

      setNewsList([newNews, ...newsList])
      resetForm()
      showAlert('success', 'News added successfully.')
    } catch (err) {
      console.error(err)
      showAlert('error', 'Failed to insert news.')
    } finally {
      setIsLoading(false)
      setIsAction(false)
    }
  }

  const handleUpdate = async () => {
    if (editingId === null) return

    if (!form.title.trim()) {
      showAlert('error', 'Title is required to update a news item.')
      return
    }

    setIsLoading(true)
    const currentNews = newsList.find(n => n.id === editingId)
    let finalSlug = form.slug

    if (!currentNews || currentNews.slug !== form.slug) {
      finalSlug = createUniqueSlug(form.title, form.slug)
    }

    try {
      const updatedNewsData = { ...form, slug: finalSlug }
      const updated = await updateNews({ id: editingId, data: updatedNewsData, files })

      setNewsList(newsList.map(n => (n.id === editingId ? updated : n)))
      resetForm()
      showAlert('success', 'News updated successfully.')
    } catch (err) {
      console.error(err)
      showAlert('error', 'Failed to update news.')
    } finally {
      setIsLoading(false)
      setIsAction(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news item? This action cannot be undone.')) return
    setIsLoading(true)
    try {
      await deleteNews(id)
      setNewsList(newsList.filter(n => n.id !== id))
      showAlert('info', 'News deleted.')
    } catch (err) {
      console.error(err)
      showAlert('error', 'Failed to delete news.')
    } finally {
      setIsLoading(false)
      setIsAction(false)
    }
  }

  const handleEdit = (news: INews) => {
    setIsAction(true)
    setEditingId(news.id)
    setSlugManuallyEdited(true)
    setForm({
      slug: news.slug,
      title: news.title,
      description: news.description,
      content: news.content as { data: ContentBlock[] }
    })
    setFiles([])
    
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleGetNews = useCallback(async () => {
    setIsLoading(true)
    try {
      const result = await getAllNews()
      setNewsList(result || [])
    } catch (error) {
      showAlert('error', 'Failed to load news list.')
      console.error('Error fetching news:', error)
    } finally {
      setIsLoading(false)
      setIsAction(false)
    }
  }, [])

  useEffect(() => {
    handleGetNews()
  }, [handleGetNews])

  // --- UI Components ---

  const AlertBox = ({ type, message }: { type: 'success' | 'error' | 'info'; message: string }) => {
    let bgColor, textColor, borderColor, icon;
    switch (type) {
      case 'success':
        bgColor = 'bg-green-50';
        textColor = 'text-green-800';
        borderColor = 'border-green-500';
        icon = '✅';
        break;
      case 'error':
        bgColor = 'bg-red-50';
        textColor = 'text-red-800';
        borderColor = 'border-red-500';
        icon = '❌';
        break;
      case 'info':
      default:
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-800';
        borderColor = 'border-gray-500';
        icon = 'ℹ️';
        break;
    }
    return (
      <div className={`fixed top-4 right-4 z-50 p-4 rounded-md border-l-4 ${bgColor} ${borderColor} shadow-lg max-w-sm transition-opacity duration-300`}>
        <div className="flex items-center">
          <div className="text-xl mr-3">{icon}</div>
          <p className={`text-sm font-medium ${textColor}`}>{message}</p>
        </div>
      </div>
    );
  };

  const ContentBlockInput = ({ block, index }: { block: ContentBlock, index: number }) => (
    <div className='mb-4 border border-gray-200 rounded-md p-3 bg-white'>
      <div className='flex justify-between items-center mb-2'>
        <select
          value={block.type}
          onChange={e => handleContentChange(e.target.value as ContentBlock['type'], index, 'type')}
          className='border border-gray-300 px-3 py-1 rounded text-sm focus:ring-0 focus:border-gray-500 transition'
        >
          <option value='heading'>Heading</option>
          <option value='paragraph'>Paragraph</option>
          <option value='list'>List</option>
          <option value='text'>Text (Generic)</option>
        </select>
        <button
          type='button'
          onClick={() => handleRemoveContent(index)}
          className='text-red-600 hover:text-red-800 transition text-lg'
          aria-label="Remove content block"
        >
          <IoMdCloseCircle />
        </button>
      </div>

      <textarea
        placeholder={`Enter content for block ${index + 1}...`}
        value={block.text}
        onChange={e => handleContentChange(e.target.value, index, 'text')}
        className='border border-gray-300 px-3 py-2 w-full rounded mt-1 focus:ring-0 focus:border-gray-500 text-sm'
        rows={block.type === 'heading' ? 1 : block.type === 'list' ? 6 : 4}
      />
    </div>
  )

  const ImagePreview = ({ file, index }: { file: File, index: number }) => (
    <div key={index} className='relative w-24 h-24 border border-gray-300 rounded-md overflow-hidden'>
      <img src={URL.createObjectURL(file)} alt={file.name} className='object-cover w-full h-full' />
      <button
        type='button'
        onClick={() => handleRemoveFile(index)}
        className='absolute top-0 right-0 bg-red-600 text-white p-1 text-xs hover:bg-red-700 transition'
        aria-label="Remove image"
      >
        <IoMdCloseCircle size={18} />
      </button>
    </div>
  )


  return (
    <div className='container mx-auto max-w-4xl py-10 px-4 font-sans'>
      {alertMessage && <AlertBox type={alertMessage.type} message={alertMessage.message} />}

      <h1 className={`text-3xl font-light text-${PRIMARY_COLOR}-700 mb-8 pb-3 border-b border-gray-300 flex items-center`}>
         News Administration Panel
      </h1>

      {/* --- News Form Section --- */}
    {isAction &&  <div className='bg-white p-6 rounded-md border border-gray-300 shadow-sm mb-12'>
        <h2 className={`text-xl font-semibold mb-6 text-gray-700 border-b border-gray-200 pb-3`}>
          {editingId ? `Editing News ID: ${editingId}` : 'Create New News Item'}
        </h2>

        <div className='space-y-4'>
          {/* Title */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Title <span className="text-red-500">*</span></label>
            <input
              type='text'
              name='title'
              placeholder='Enter news title'
              value={form.title}
              onChange={handleTitleChange}
              className='border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-gray-500 transition'
            />
          </div>

          {/* Slug */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>URL Slug (ห้ามซ้ำ<span className="text-red-500">*</span>)</label>
            <input
              type='text'
              name='slug'
              placeholder='auto-generated-slug'
              value={form.slug}
              onChange={(e) => {
                setSlugManuallyEdited(true)
                handleChange(e)
              }}
              className='border border-gray-300 px-3 py-2 w-full rounded-md bg-gray-50 focus:outline-none focus:border-gray-500 transition'
            />
          </div>

          {/* Description */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Short Description</label>
            <textarea
              name='description'
              placeholder='A brief summary'
              value={form.description}
              onChange={handleChange}
              rows={3}
              className='border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-gray-500 transition'
            />
          </div>
        </div>

        {/* --- Content Blocks --- */}
        <h3 className='text-lg font-medium mt-8 mb-3 text-gray-700 flex items-center border-b border-gray-200 pb-2'>
          <IoMdCreate className='mr-2' /> Main Content Blocks
        </h3>
        <div className='p-4 border border-gray-200 rounded-md bg-gray-50'>
          {form.content.data.map((block, i) => (
            <ContentBlockInput key={i} block={block} index={i} />
          ))}

          <div className="flex gap-2 pt-2 flex-wrap">
            <button
              type='button'
              className={`flex items-center text-sm font-medium text-${PRIMARY_COLOR}-600 hover:text-${PRIMARY_COLOR}-800 transition`}
              onClick={() => handleAddContent('paragraph')}
            >
              <IoIosAddCircle className='mr-1' /> Add Paragraph
            </button>
            <button
              type='button'
              className={`flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition`}
              onClick={() => handleAddContent('heading')}
            >
              <IoIosAddCircle className='mr-1' /> Add Heading
            </button>
            <button
              type='button'
              className={`flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition`}
              onClick={() => handleAddContent('list')}
            >
              <IoIosAddCircle className='mr-1' /> Add List
            </button>
          </div>
        </div>

        {/* --- Image Upload --- */}
        <h3 className='text-lg font-medium mt-8 mb-3 text-gray-700 flex items-center border-b border-gray-200 pb-2'>
          <IoMdImages className='mr-2' /> Featured Images <span className="text-red-500 text-sm ml-2">*</span>
        </h3>
        <div className='p-4 border border-gray-300 rounded-md'>
          <label className={`flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-${PRIMARY_COLOR}-300 rounded-md cursor-pointer hover:bg-${PRIMARY_COLOR}-50 transition mb-4`}>
            <span className='text-gray-600 font-medium'>Click to select files</span>
            <span className='text-xs text-gray-500 mt-1'>(Multiple images allowed)</span>
            <input type='file' multiple onChange={handleFileChange} className='hidden' accept="image/*" />
          </label>

          {files.length > 0 && (
            <div className='mt-3 flex flex-wrap gap-3'>
              {files.map((file, i) => (
                <ImagePreview key={i} file={file} index={i} />
              ))}
            </div>
          )}
          {editingId && files.length === 0 && (
            <p className='text-sm text-gray-500 mt-2 flex items-center'>
                <IoMdAlert className='mr-1 text-yellow-600' /> No files uploaded. Existing images will be preserved.
            </p>
          )}
        </div>


        {/* --- Action Buttons --- */}
        <div className='flex justify-end items-center mt-8 pt-6 border-t border-gray-200 space-x-4'>
          {editingId && (
            <button
              onClick={resetForm}
              disabled={isLoading}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50`}
            >
              <IoMdCloseCircle className='mr-2' /> Cancel
            </button>
          )}

          {editingId ? (
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className={`flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition disabled:opacity-50`}
            >
              <IoIosSave className='mr-2' /> {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          ) : (
            <button
              onClick={handleInsert}
              disabled={isLoading}
              className={`flex items-center bg-${PRIMARY_COLOR}-600 hover:bg-${PRIMARY_COLOR}-700 text-white px-6 py-2 rounded-md text-sm font-medium transition disabled:opacity-50`}
            >
              <IoIosAddCircle className='mr-2' /> {isLoading ? 'Publishing...' : 'Publish News'}
            </button>
          )}
        </div>
      </div>}

      {!isAction && <button
      onClick={() => setIsAction(true)}
      className='flex items-center justify-center
       bg-yellow-500 hover:bg-yellow-600 text-white
        px-3 py-2 rounded-sm  font-medium transition mb-4 '>Add NEWS</button>}

      {/* -------------------- */}
      {/* --- News List Section --- */}
      {/* -------------------- */}
      <h2 className={`text-2xl font-light text-gray-700 mb-6 pb-2 border-b border-gray-300 flex items-center`}>
         Published News Items ({newsList.length})
      </h2>

      <div className='grid gap-4'>
        {isLoading && newsList.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Loading news items...</p>
        ) : newsList.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No news items published yet.</p>
        ) : (
          newsList.map(n => (
            <div
              key={n.id}
              className={`bg-white p-4 rounded-md border transition ${editingId === n.id ? `border-4 border-yellow-500 shadow-lg` : 'border-gray-300 hover:shadow-sm'}`}
            >
              <div className='flex justify-between items-start'>
                <div className='flex-grow pr-4'>
                  <p className='text-xs font-mono text-gray-500 mb-1'>Slug: /{n.slug}</p>
                  <div className='text-lg font-semibold text-gray-800 mb-1'>{n.title}</div>
                  <div className='text-gray-600 text-sm mb-3 line-clamp-2'>{n.description}</div>

                  {n.image_url.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {n.image_url.slice(0, 3).map((img, i) => (
                        <img key={i} src={img} alt={`${n.title} image ${i+1}`} className='w-12 h-12 object-cover rounded-sm border border-gray-200' />
                      ))}
                      {n.image_url.length > 3 && (
                          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-500 text-xs rounded-sm border border-gray-200">
                              +{n.image_url.length - 3}
                          </div>
                      )}
                    </div>
                  )}
                </div>
                <div className='flex flex-col gap-2 ml-4 flex-shrink-0'>
                  <button
                    onClick={() => handleEdit(n)}
                    className={`flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-sm text-xs font-medium transition`}
                  >
                    <IoMdCreate className='mr-1' /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(n.id)}
                    className='flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-sm text-xs font-medium transition'
                  >
                    <IoIosTrash className='mr-1' /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}