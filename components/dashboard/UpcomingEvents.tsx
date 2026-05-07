'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react'
import { useStore } from '@/store/store'
import Link from 'next/link'

export default function UpcomingEvents() {
  const { events } = useStore()
  const upcomingEvents = events.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-text">Upcoming Events</h3>
        </div>
        <Link href="/events" className="text-primary text-sm hover:underline flex items-center">
          View all <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-3">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 rounded-lg border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-text text-sm">{event.title}</h4>
              <span className="text-xs text-primary font-medium">
               {new Date(event.date).toLocaleDateString('en-CA')} 
              </span>
            </div>
            <p className="text-xs text-muted mb-2 line-clamp-1">{event.description}</p>
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="flex items-center">
                <MapPin size={10} className="mr-1" />
                {event.location}
              </span>
              <span className="flex items-center">
                <Users size={10} className="mr-1" />
                {event.attendees} attending
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}