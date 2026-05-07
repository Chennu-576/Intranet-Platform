'use client'

import { motion } from 'framer-motion'
import { Bell, ChevronRight, Pin, Calendar } from 'lucide-react'
import { useStore } from '@/store/store'
import Link from 'next/link'

export default function AnnouncementsWidget() {
  const { announcements } = useStore()
  const topAnnouncements = announcements.filter(a => a.priority === 'high').slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bell size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-text">Priority Announcements</h3>
        </div>
        <Link href="/announcements" className="text-primary text-sm hover:underline flex items-center">
          View all <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {topAnnouncements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-text">{announcement.title}</h4>
              <Pin size={12} className="text-primary" />
            </div>
            <p className="text-sm text-muted mb-2 line-clamp-2">{announcement.content}</p>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>by {announcement.author.name}</span>
              <span className="flex items-center">
                <Calendar size={10} className="mr-1" />
                {new Date(announcement.createdAt).toLocaleDateString('en-CA')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}