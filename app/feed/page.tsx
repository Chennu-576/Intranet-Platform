// src/app/feed/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter } from 'lucide-react'
import FeedCard from '@/components/feed/FeedCard'
import CreatePostModal from '@/components/feed/CreatePostModal'
import { useStore } from '@/store/store'

export default function FeedPage() {
  const { feedPosts } = useStore()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [filter, setFilter] = useState<'all' | 'announcement' | 'recognition' | 'update'>('all')

  const filteredPosts = feedPosts.filter(post => filter === 'all' || post.type === filter)

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-6 md:p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-text mb-2">Employee Feed</h1>
                <p className="text-muted">Stay updated with your team's latest activities</p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus size={18} />
                <span>Create Post</span>
              </button>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
            <Filter size={18} className="text-muted" />
            {(['all', 'announcement', 'recognition', 'update'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filter === f
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted hover:bg-gray-100'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Feed */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <FeedCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <CreatePostModal open={showCreateModal} onClose={() => setShowCreateModal(false)} />
    </>
  )
}