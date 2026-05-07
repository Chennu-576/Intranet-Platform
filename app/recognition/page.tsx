'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Star, Crown, TrendingUp, Users, Gift, Sparkles } from 'lucide-react'
import { useStore } from '@/store/store'

export default function RecognitionPage() {
  const { recognitions, employees } = useStore()
  const [selectedBadge, setSelectedBadge] = useState<string>('all')

  const badgeColors: Record<string, string> = {
    star: 'bg-yellow-100 text-yellow-700',
    leader: 'bg-purple-100 text-purple-700',
    innovator: 'bg-blue-100 text-blue-700',
    teamplayer: 'bg-green-100 text-green-700',
    excellence: 'bg-red-100 text-red-700'
  }

  const topContributors = [...employees].sort((a, b) => b.recognitionPoints - a.recognitionPoints).slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Award className="text-primary" size={28} />
            <h1 className="text-3xl font-bold text-text">Recognition & Appreciation</h1>
          </div>
          <p className="text-muted">Celebrate your colleagues and their achievements</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-cards rounded-xl border border-border p-4 text-center">
            <Award className="text-primary mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-text">342</p>
            <p className="text-xs text-muted">Total Recognitions</p>
          </div>
          <div className="bg-cards rounded-xl border border-border p-4 text-center">
            <Users className="text-accent mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-text">156</p>
            <p className="text-xs text-muted">People Recognized</p>
          </div>
          <div className="bg-cards rounded-xl border border-border p-4 text-center">
            <TrendingUp className="text-success mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-text">+28%</p>
            <p className="text-xs text-muted">Growth This Month</p>
          </div>
          <div className="bg-cards rounded-xl border border-border p-4 text-center">
            <Gift className="text-warning mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold text-text">24</p>
            <p className="text-xs text-muted">Badges Awarded</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recognition Feed */}
          <div className="lg:col-span-2">
            <div className="bg-cards rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Recent Recognitions</h3>
              <div className="space-y-4">
                {recognitions.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`p-2 rounded-full ${badgeColors[rec.badge]}`}>
                      <Star size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold text-text">{rec.from.name}</span>
                        <span className="text-muted"> recognized </span>
                        <span className="font-semibold text-text">{rec.to.name}</span>
                      </p>
                      <p className="text-xs text-muted mt-1">{rec.message}</p>
                      <p className="text-xs text-muted mt-2">{new Date(rec.createdAt).toLocaleDateString('en-CA')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Contributors Sidebar */}
          <div className="space-y-6">
            <div className="bg-cards rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Crown className="text-primary mr-2" size={18} />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((emp, idx) => (
                  <div key={emp.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-primary">#{idx + 1}</span>
                      <img src={emp.avatar} alt="" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-sm font-medium text-text">{emp.name}</p>
                        <p className="text-xs text-muted">{emp.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sparkles size={12} className="text-warning" />
                      <span className="text-sm font-semibold text-text">{emp.recognitionPoints}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <Award size={40} className="text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-text mb-2">Recognize a Colleague</h3>
              <p className="text-sm text-muted mb-4">Appreciate someone's hard work and contribution</p>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                Give Recognition
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}