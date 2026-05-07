// src/components/dashboard/QuickActions.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, MessageCircle, BookOpen, Users, Bell } from 'lucide-react'

const actions = [
  { icon: Award, label: 'Give Recognition', color: 'primary', href: '/recognition' },
  { icon: Calendar, label: 'Create Event', color: 'success', href: '/events' },
  { icon: MessageCircle, label: 'New Post', color: 'accent', href: '/feed' },
  { icon: BookOpen, label: 'Add Resource', color: 'warning', href: '/knowledge' },
  { icon: Users, label: 'Find Colleague', color: 'primary', href: '/directory' },
  { icon: Bell, label: 'Announce', color: 'accent', href: '/announcements' },
]

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-center p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-gray-50 transition-all duration-200"
          >
            <action.icon size={20} className={`text-${action.color} mb-2`} />
            <span className="text-xs text-text">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}