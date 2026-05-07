// src/app/gallery/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Video, Calendar, Heart, Download, Eye, X, Upload } from 'lucide-react'

const mediaItems = [
  { id: 1, type: 'image', url: 'https://picsum.photos/id/20/400/300', title: 'Company Retreat 2024', date: '2024-01-15', likes: 234, views: 1234, author: 'Marketing Team' },
  { id: 2, type: 'image', url: 'https://picsum.photos/id/26/400/300', title: 'Team Building Event', date: '2024-01-10', likes: 189, views: 987, author: 'HR Team' },
  { id: 3, type: 'video', url: 'https://picsum.photos/id/30/400/300', title: 'All-Hands Meeting Q4', date: '2024-01-05', likes: 456, views: 2341, author: 'Leadership' },
  { id: 4, type: 'image', url: 'https://picsum.photos/id/32/400/300', title: 'Holiday Celebration', date: '2023-12-20', likes: 567, views: 1876, author: 'Social Committee' },
]

const categories = ['All', 'Events', 'Team Photos', 'Achievements', 'Videos']

export default function MediaGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const filteredMedia = mediaItems.filter(item => 
    selectedCategory === 'All' || item.title.includes(selectedCategory)
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Image className="text-primary" size={28} />
            <h1 className="text-3xl font-bold text-text">Media Gallery</h1>
          </div>
          <p className="text-muted">Explore moments and memories from across the company</p>
        </motion.div>

        {/* Upload Button */}
        <div className="mb-6 flex justify-end">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <Upload size={18} />
            <span>Upload Media</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-muted hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedMedia(item)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-cards border border-border shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video size={48} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-xs text-muted mb-2">by {item.author}</p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Heart size={12} className="mr-1" />
                        {item.likes}
                      </span>
                      <span className="flex items-center">
                        <Eye size={12} className="mr-1" />
                        {item.views}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setSelectedMedia(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <img src={selectedMedia.url} alt={selectedMedia.title} className="w-full rounded-lg" />
            <div className="bg-cards rounded-b-lg p-4 mt-1">
              <h3 className="text-xl font-semibold text-text mb-2">{selectedMedia.title}</h3>
              <p className="text-muted mb-2">by {selectedMedia.author}</p>
              <div className="flex items-center space-x-4 text-muted">
                <span className="flex items-center">
                  <Heart size={16} className="mr-1" />
                  {selectedMedia.likes}
                </span>
                <span className="flex items-center">
                  <Eye size={16} className="mr-1" />
                  {selectedMedia.views}
                </span>
                <button className="ml-auto flex items-center space-x-1 text-primary">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}