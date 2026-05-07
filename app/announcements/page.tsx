'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Pin, Calendar, User, Filter, Megaphone } from 'lucide-react'
import { useStore } from '@/store/store'

export default function AnnouncementsPage() {
  const { announcements } = useStore()
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')

  const filteredAnnouncements = announcements.filter(a => 
    filter === 'all' || a.priority === filter
  )

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Megaphone className="text-primary" size={28} />
            <h1 className="text-3xl font-bold text-text">Announcements Center</h1>
          </div>
          <p className="text-muted">Stay updated with company news and updates</p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['all', 'high', 'medium', 'low'].map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p as any)}
              className={`px-3 py-1 rounded-full text-sm capitalize transition-colors ${
                filter === p ? 'bg-primary text-white' : 'bg-white text-muted hover:bg-gray-100'
              }`}
            >
              {p === 'all' ? 'All' : `${p} Priority`}
            </button>
          ))}
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-cards rounded-xl border border-border p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority.toUpperCase()} Priority
                  </span>
                  {announcement.priority === 'high' && <Pin size={14} className="text-primary" />}
                </div>
                <span className="text-xs text-muted flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {new Date(announcement.createdAt).toLocaleDateString('en-CA')}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-text mb-2">{announcement.title}</h2>
              <p className="text-muted mb-4 leading-relaxed">{announcement.content}</p>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <img src={announcement.author.avatar} alt="" className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-text">{announcement.author.name}</span>
                  <span className="text-xs text-muted">{announcement.author.role}</span>
                </div>
                {announcement.department && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-muted">
                    {announcement.department}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}