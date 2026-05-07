'use client'

import { motion } from 'framer-motion'
import { MessageCircle, TrendingUp, ChevronRight, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

const trendingTopics = [
  { title: 'Remote work best practices', replies: 156, likes: 342, category: 'Workplace' },
  { title: 'New AI tools for developers', replies: 89, likes: 234, category: 'Technology' },
  { title: 'Cross-team collaboration tips', replies: 67, likes: 178, category: 'Collaboration' },
]

export default function TrendingDiscussions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <TrendingUp size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-text">Trending Discussions</h3>
        </div>
        <Link href="/forum" className="text-primary text-sm hover:underline flex items-center">
          View all <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <MessageCircle size={14} className="text-muted" />
                  <h4 className="font-medium text-text group-hover:text-primary transition-colors">
                    {topic.title}
                  </h4>
                </div>
                <div className="flex items-center space-x-3 text-xs text-muted">
                  <span>{topic.replies} replies</span>
                  <span className="flex items-center">
                    <ThumbsUp size={10} className="mr-1" />
                    {topic.likes}
                  </span>
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded-full">{topic.category}</span>
                </div>
              </div>
              <ChevronRight size={16} className="text-muted group-hover:text-primary transition-colors" />
            </div>
            {index < trendingTopics.length - 1 && <div className="border-b border-border mt-3" />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}