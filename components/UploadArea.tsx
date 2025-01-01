'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'

export default function UploadArea() {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file upload logic here
    console.log('File(s) dropped')
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600 mb-2">Drag and drop your pitch deck here, or</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Browse Files
      </button>
    </div>
  )
}

