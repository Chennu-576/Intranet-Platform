'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Image, Send, Hash } from 'lucide-react'

interface CreatePostModalProps {
  open: boolean
  onClose: () => void
}

export default function CreatePostModal({ open, onClose }: CreatePostModalProps) {
  const [content, setContent] = useState('')
  const [postType, setPostType] = useState<'update' | 'announcement' | 'recognition'>('update')

  const handleSubmit = () => {
    if (!content.trim()) return
    // In real app, this would dispatch to store
    console.log('Post created:', { content, postType })
    setContent('')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-cards rounded-xl shadow-2xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-text">Create a Post</h2>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <X size={20} className="text-muted" />
              </button>
            </div>

            <div className="p-4">
              {/* Post Type Selector */}
              <div className="flex space-x-2 mb-4">
                {(['update', 'announcement', 'recognition'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setPostType(type)}
                    className={`px-3 py-1 rounded-full text-sm capitalize transition-colors ${
                      postType === type
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-muted hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Text Area */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`Share your ${postType}...`}
                rows={4}
                className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />

              {/* Actions */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Image size={18} className="text-muted" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Hash size={18} className="text-muted" />
                  </button>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!content.trim()}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                  <span>Post</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}