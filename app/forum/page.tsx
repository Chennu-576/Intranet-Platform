// src/app/forum/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ThumbsUp, Eye, MessageSquare, Pin, TrendingUp, Users, Tag } from 'lucide-react'

interface DiscussionThread {
  id: string
  title: string
  content: string
  author: { name: string; avatar: string; role: string }
  category: string
  replies: number
  views: number
  likes: number
  isPinned: boolean
  createdAt: string
  tags: string[]
}

const mockThreads: DiscussionThread[] = [
  {
    id: '1',
    title: 'How to improve cross-team collaboration?',
    content: 'Looking for best practices and tools that have worked for other teams...',
    author: { name: 'Alex Morgan', avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan', role: 'Product Designer' },
    category: 'Collaboration',
    replies: 24,
    views: 342,
    likes: 56,
    isPinned: true,
    createdAt: '2024-01-10',
    tags: ['collaboration', 'tools', 'best-practices']
  },
  {
    id: '2',
    title: 'Remote work tips and tricks',
    content: 'Share your remote work setup, productivity hacks, and work-life balance tips...',
    author: { name: 'Jamie Rodriguez', avatar: 'https://ui-avatars.com/api/?name=Jamie+Rodriguez', role: 'Engineering Manager' },
    category: 'Remote Work',
    replies: 156,
    views: 2341,
    likes: 342,
    isPinned: true,
    createdAt: '2024-01-08',
    tags: ['remote', 'productivity', 'wellness']
  },
  {
    id: '3',
    title: 'New AI tools for developers',
    content: "Let's discuss the latest AI coding assistants and how they're changing our workflow...",
    author: { name: 'Casey Williams', avatar: 'https://ui-avatars.com/api/?name=Casey+Williams', role: 'Data Scientist' },
    category: 'Technology',
    replies: 89,
    views: 1234,
    likes: 234,
    isPinned: false,
    createdAt: '2024-01-12',
    tags: ['ai', 'development', 'tools']
  }
]

const categories = ['All', 'Collaboration', 'Remote Work', 'Technology', 'Design', 'Leadership', 'Wellness']

export default function DiscussionForumPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'unanswered'>('recent')

  const filteredThreads = mockThreads.filter(thread => 
    selectedCategory === 'All' || thread.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-text mb-2">Discussion Forum</h1>
            <p className="text-muted">Connect, share ideas, and collaborate with colleagues</p>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <MessageSquare size={18} />
            <span>New Discussion</span>
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Total Discussions</p>
                <p className="text-2xl font-bold text-text">1,247</p>
              </div>
              <MessageCircle size={24} className="text-primary" />
            </div>
          </div>
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Active Members</p>
                <p className="text-2xl font-bold text-text">892</p>
              </div>
              <Users size={24} className="text-accent" />
            </div>
          </div>
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Response Rate</p>
                <p className="text-2xl font-bold text-text">94%</p>
              </div>
              <TrendingUp size={24} className="text-success" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
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

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setSortBy('recent')}
              className={`text-sm px-3 py-1 rounded-lg transition-colors ${
                sortBy === 'recent' ? 'bg-primary/10 text-primary' : 'text-muted'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`text-sm px-3 py-1 rounded-lg transition-colors ${
                sortBy === 'popular' ? 'bg-primary/10 text-primary' : 'text-muted'
              }`}
            >
              Most Popular
            </button>
            <button
              onClick={() => setSortBy('unanswered')}
              className={`text-sm px-3 py-1 rounded-lg transition-colors ${
                sortBy === 'unanswered' ? 'bg-primary/10 text-primary' : 'text-muted'
              }`}
            >
              Unanswered
            </button>
          </div>
          <p className="text-sm text-muted">{filteredThreads.length} discussions</p>
        </div>

        {/* Threads List */}
        <div className="space-y-4">
          {filteredThreads.map((thread, index) => (
            <motion.div
              key={thread.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="bg-cards rounded-xl border border-border p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {thread.isPinned && (
                <div className="flex items-center text-xs text-primary mb-2">
                  <Pin size={12} className="mr-1" />
                  Pinned
                </div>
              )}
              <h3 className="text-lg font-semibold text-text mb-2">{thread.title}</h3>
              <p className="text-muted text-sm mb-4 line-clamp-2">{thread.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={thread.author.avatar} alt="" className="w-6 h-6 rounded-full" />
                  <div>
                    <p className="text-xs font-medium text-text">{thread.author.name}</p>
                    <p className="text-xs text-muted">{thread.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted text-sm">
                  <span className="flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    {thread.replies}
                  </span>
                  <span className="flex items-center">
                    <Eye size={14} className="mr-1" />
                    {thread.views}
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp size={14} className="mr-1" />
                    {thread.likes}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}