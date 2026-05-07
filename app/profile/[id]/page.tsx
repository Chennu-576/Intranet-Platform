// src/app/profile/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  User, Mail, Briefcase, MapPin, Calendar, Award, 
  Star, Users, MessageCircle, TrendingUp, Edit2
} from 'lucide-react'
import { mockEmployees } from '@/data/mockData'

export default function EmployeeProfilePage() {
  const { id } = useParams()
  const employee = mockEmployees.find(e => e.id === id) || mockEmployees[0]

  const achievements = [
    { title: 'Star Performer Q4 2023', date: 'Dec 2023', icon: Star },
    { title: 'Innovation Award', date: 'Sep 2023', icon: Award },
    { title: 'Team Player of the Month', date: 'Aug 2023', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cards rounded-xl border border-border overflow-hidden mb-8"
        >
          <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20" />
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end -mt-12 mb-6">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-24 h-24 rounded-full border-4 border-cards"
              />
              <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-text">{employee.name}</h1>
                    <p className="text-primary">{employee.role}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit2 size={18} className="text-muted" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-muted">
                  <Briefcase size={16} className="mr-2" />
                  <span className="text-sm">{employee.department}</span>
                </div>
                <div className="flex items-center text-muted">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">{employee.email}</span>
                </div>
                <div className="flex items-center text-muted">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{employee.location}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-muted">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">Joined {new Date(employee.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-muted">
                  <Award size={16} className="mr-2" />
                  <span className="text-sm">{employee.recognitionPoints} Recognition Points</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Recognition Received</p>
                <p className="text-2xl font-bold text-text">24</p>
              </div>
              <Award size={24} className="text-primary" />
            </div>
          </div>
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Posts & Comments</p>
                <p className="text-2xl font-bold text-text">156</p>
              </div>
              <MessageCircle size={24} className="text-accent" />
            </div>
          </div>
          <div className="bg-cards rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Engagement Score</p>
                <p className="text-2xl font-bold text-text">94%</p>
              </div>
              <TrendingUp size={24} className="text-success" />
            </div>
          </div>
        </div>

        {/* Skills & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-cards rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {employee.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cards rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="flex items-center space-x-3">
                  <achievement.icon size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text">{achievement.title}</p>
                    <p className="text-xs text-muted">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}