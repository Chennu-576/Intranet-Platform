// src/components/ui/UploadButton.tsx
'use client'

import { Upload } from 'lucide-react'
import { useState } from 'react'

export default function UploadButton() {
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => setIsUploading(false), 2000)
  }

  return (
    <button
      onClick={handleUpload}
      disabled={isUploading}
      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2 disabled:opacity-50"
    >
      <Upload size={18} className={isUploading ? 'animate-pulse' : ''} />
      <span>{isUploading ? 'Uploading...' : 'Upload Media'}</span>
    </button>
  )
}