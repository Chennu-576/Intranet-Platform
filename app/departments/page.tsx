// src/app/departments/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, TrendingUp, Award, Calendar, Mail, BarChart3, Activity } from 'lucide-react'
import { mockDepartments } from '@/data/mockData'

const departments = [
  {
    id: 'product',
    name: 'Product',
    head: 'Alex Morgan',
    members: 24,
    engagement: 92,
    projects: 8,
    achievements: 12,
    color: 'primary'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    head: 'Jamie Rodriguez',
    members: 42,
    engagement: 89,
    projects: 15,
    achievements: 18,
    color: 'accent'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    head: 'Jordan Lee',
    members: 18,
    engagement: 94,
    projects: 6,
    achievements: 9,
    color: 'success'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    head: 'Taylor Swift',
    members: 12,
    engagement: 96,
    projects: 4,
    achievements: 7,
    color: 'warning'
  }
]

export default function DepartmentSpacesPage() {
  const [selectedDept, setSelectedDept] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-text mb-2">Department Spaces</h1>
          <p className="text-muted">Collaborate and connect with your team</p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedDept(dept)}
              className="bg-cards rounded-xl border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200"
            >
              <div className={`h-2 bg-${dept.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-1">{dept.name}</h3>
                    <p className="text-sm text-muted">Led by {dept.head}</p>
                  </div>
                  <Building2 className={`text-${dept.color}`} size={32} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-muted" />
                    <span className="text-sm text-text">{dept.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-muted" />
                    <span className="text-sm text-text">{dept.achievements} awards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-muted" />
                    <span className="text-sm text-text">{dept.engagement}% engaged</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-muted" />
                    <span className="text-sm text-text">{dept.projects} active</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    View Space
                  </button>
                  <button className="px-3 py-1 text-sm border border-border rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="bg-cards rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text mb-4">Department Activity</h3>
          <div className="space-y-4">
            {[
              { dept: 'Product', action: 'Launched new design system', time: '2 hours ago', impact: 'high' },
              { dept: 'Engineering', action: 'Completed Q4 sprint', time: '5 hours ago', impact: 'medium' },
              { dept: 'Marketing', action: 'Campaign exceeded targets by 150%', time: '1 day ago', impact: 'high' },
              { dept: 'HR', action: 'Onboarded 12 new employees', time: '2 days ago', impact: 'medium' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.impact === 'high' ? 'bg-success' : 'bg-warning'
                  }`} />
                  <div>
                    <p className="font-medium text-text">{activity.dept}</p>
                    <p className="text-sm text-muted">{activity.action}</p>
                  </div>
                </div>
                <p className="text-xs text-muted">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}