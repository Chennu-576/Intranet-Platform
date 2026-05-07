'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, Filter, Plus } from 'lucide-react'
import { useStore } from '@/store/store'

export default function EventsPage() {
  const { events } = useStore()
  const [view, setView] = useState<'upcoming' | 'past'>('upcoming')

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'celebration': return 'bg-pink-100 text-pink-700'
      case 'workshop': return 'bg-purple-100 text-purple-700'
      case 'meeting': return 'bg-blue-100 text-blue-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="text-primary" size={28} />
              <h1 className="text-3xl font-bold text-text">Events & Celebrations</h1>
            </div>
            <p className="text-muted">Join company events and celebrate together</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
            <Plus size={18} />
            <span>Create Event</span>
          </button>
        </motion.div>

        {/* View Toggle */}
        <div className="flex space-x-2 mb-6">
          {['upcoming', 'past'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === v ? 'bg-primary text-white' : 'bg-white text-muted hover:bg-gray-100'
              }`}
            >
              {v === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-cards rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-2 bg-primary" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className="text-xs text-muted flex items-center">
                    <Users size={12} className="mr-1" />
                    {event.attendees} attending
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-text mb-2">{event.title}</h3>
                <p className="text-sm text-muted mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted">
                    <Calendar size={14} className="mr-2" />
                  {new Date(event.date).toLocaleDateString('en-CA', { 
                     weekday: 'short', 
                     month: 'short', 
                     day: 'numeric',
                     hour: '2-digit',
                    minute: '2-digit'
          })}
                  </div>
                  <div className="flex items-center text-muted">
                    <MapPin size={14} className="mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted">
                    <Users size={14} className="mr-2" />
                    Organized by {event.organizer.name}
                  </div>
                </div>
                
                <button className="w-full mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium">
                  RSVP Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}