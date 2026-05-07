'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, ChevronRight } from 'lucide-react'
import { useStore } from '@/store/store'
import Link from 'next/link'

export default function RecentRecognitions() {
  const { recognitions } = useStore()
  const recent = recognitions.slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-text">Recent Recognitions</h3>
        </div>
        <Link href="/recognition" className="text-primary text-sm hover:underline flex items-center">
          View all <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-3">
        {recent.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="p-1.5 bg-yellow-100 rounded-full">
              <Sparkles size={12} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold text-text">{rec.from.name}</span>
                <span className="text-muted"> → </span>
                <span className="font-semibold text-text">{rec.to.name}</span>
              </p>
              <p className="text-xs text-muted truncate">{rec.message}</p>
              <p className="text-xs text-muted mt-1">{new Date(rec.createdAt).toLocaleDateString('en-CA')}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}