'use client'

import React, { useState, ChangeEvent, useEffect } from 'react'

import { IoIosTrash } from 'react-icons/io'
import {
  insertNewsWithImage,
  updateNews,
  deleteNews,
  getAllNews
} from '@/app/repositories/newsClient'
import { INews } from '@/app/models/newsModel'

interface NewsAdminProps {
  initialNews?: INews[]
}

export default function NewsAdminPage ({ initialNews = [] }: NewsAdminProps) {
  const [newsList, setNewsList] = useState<INews[]>(initialNews)
  const [form, setForm] = useState<
    Omit<INews, 'id' | 'created_at' | 'image_url'>
  >({
    slug: '',
    title: '',
    description: '',
    content: { data: [] }
  })
  const [files, setFiles] = useState<File[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleContentChange = (
    value: string,
    index: number,
    field: 'text' | 'type'
  ) => {
    const newData = [...form.content.data]
    newData[index] = { ...newData[index], [field]: value }
    setForm({ ...form, content: { data: newData } })
  }

  const handleAddContent = () => {
    setForm({
      ...form,
      content: { data: [...form.content.data, { type: 'text', text: '' }] }
    })
  }

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  // Insert news
  const handleInsert = async () => {
    try {
      const newNews = await insertNewsWithImage(form, files)
      setNewsList([newNews, ...newsList])
      setForm({ slug: '', title: '', description: '', content: { data: [] } })
      setFiles([])
      alert('News added successfully!')
    } catch (err) {
      console.error(err)
      alert('Failed to insert news.')
    }
  }

  // Update news
  const handleUpdate = async () => {
    if (editingId === null) return
    try {
      const updated = await updateNews({ id: editingId, data: form, files })
      setNewsList(newsList.map(n => (n.id === editingId ? updated : n)))
      setEditingId(null)
      setForm({ slug: '', title: '', description: '', content: { data: [] } })
      setFiles([])
      alert('News updated successfully!')
    } catch (err) {
      console.error(err)
      alert('Failed to update news.')
    }
  }

  // Delete news
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news?')) return
    try {
      await deleteNews(id)
      setNewsList(newsList.filter(n => n.id !== id))
      alert('News deleted successfully!')
    } catch (err) {
      console.error(err)
      alert('Failed to delete news.')
    }
  }

  // Edit news
  const handleEdit = (news: INews) => {
    setEditingId(news.id)
    setForm({
      slug: news.slug,
      title: news.title,
      description: news.description,
      content: news.content
    })
    setFiles([])
  }

  const handleGetNews = async () => {
    const result = await getAllNews()

    setNewsList(result || [])
  }

  useEffect(() => {
    handleGetNews()
  }, [])

  return (
    <div className='container-x py-10'>
      <h1 className='text-3xl font-bold text-[var(--primary)] mb-6'>
        News Admin
      </h1>

      {/* Form */}
      <div className='bg-white p-6 rounded-lg shadow-md mb-10'>
        <input
          type='text'
          name='slug'
          placeholder='Slug'
          value={form.slug}
          onChange={handleChange}
          className='border px-3 py-2 w-full mb-3 rounded'
        />
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={form.title}
          onChange={handleChange}
          className='border px-3 py-2 w-full mb-3 rounded'
        />
        <textarea
          name='description'
          placeholder='Description'
          value={form.description}
          onChange={handleChange}
          className='border px-3 py-2 w-full mb-3 rounded'
        />
        {/* Content blocks */}
        <div className='mb-3'>
          {form.content.data.map(
            (block: { type: string; text: string }, i: number) => (
              <div key={i} className='mb-4 border rounded p-3 bg-gray-50'>
                {/* Type selector */}
                <select
                  value={block.type}
                  onChange={e => handleContentChange(e.target.value, i, 'type')}
                  className='border px-2 py-1 rounded mb-2 w-full'
                >
                  <option value='heading'>Heading</option>
                  <option value='paragraph'>Paragraph</option>
                  <option value='list'>List</option>
                  <option value='text'>Text (default)</option>
                </select>

                {/* Text input */}
                <textarea
                  placeholder={`Content block ${i + 1}`}
                  value={block.text}
                  onChange={e => handleContentChange(e.target.value, i, 'text')}
                  className='border px-3 py-2 w-full rounded'
                  rows={block.type === 'heading' ? 1 : 3}
                />
              </div>
            )
          )}
          <button
            type='button'
            className='bg-blue-500 text-white px-3 py-1 rounded mb-3'
            onClick={handleAddContent}
          >
            + Add content block
          </button>
        </div>
        {/* File upload */}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Upload Images
          </label>

          {/* Custom file input */}
          <label className='flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition'>
            <span className='text-gray-600'>
              Click to select or drag & drop files
            </span>
            <input
              type='file'
              multiple
              onChange={handleFileChange}
              className='hidden'
            />
          </label>

          {/* Preview selected files */}
          {files.length > 0 && (
            <div className='mt-3 flex flex-wrap gap-3'>
              {files.map((file, i) => (
                <div
                  key={i}
                  className='relative w-24 h-24 border rounded overflow-hidden'
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className='object-cover w-full h-full'
                  />
                  <button
                    type='button'
                    onClick={() =>
                      setFiles(prev => prev.filter((_, idx) => idx !== i))
                    }
                    className='absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded'
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {editingId ? (
          <button
            onClick={handleUpdate}
            className='bg-green-600 text-white px-5 py-2 rounded'
          >
            Update News
          </button>
        ) : (
          <button
            onClick={handleInsert}
            className='bg-blue-600 text-white px-5 py-2 rounded'
          >
            Insert News
          </button>
        )}
      </div>

      {/* List of news */}
      <div className='grid gap-5'>
        {newsList.map(n => (
          <div
            key={n.id}
            className='bg-white p-4 rounded shadow flex justify-between items-start'
          >
            <div>
              <div className='font-bold'>{n.title}</div>
              <div className='text-gray-500'>{n.description}</div>
              <div className='flex flex-wrap gap-2 mt-2'>
                {n.image_url.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=''
                    className='w-20 h-20 object-cover rounded'
                  />
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <button
                onClick={() => handleEdit(n)}
                className='bg-yellow-400 text-white px-3 py-1 rounded'
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(n.id)}
                className='bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1'
              >
                <IoIosTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
