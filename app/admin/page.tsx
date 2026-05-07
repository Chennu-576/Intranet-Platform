// src/app/admin/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, Users, BarChart3, Megaphone, Settings, Flag, 
  TrendingUp, Activity, Eye, MessageSquare, AlertCircle,
  Filter, Download, RefreshCw, CheckCircle, XCircle
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const engagementData = [
  { month: 'Oct', engagement: 82, activeUsers: 890, posts: 234 },
  { month: 'Nov', engagement: 85, activeUsers: 920, posts: 267 },
  { month: 'Dec', engagement: 88, activeUsers: 950, posts: 289 },
  { month: 'Jan', engagement: 91, activeUsers: 1010, posts: 312 },
]

const departmentData = [
  { name: 'Product', value: 28, color: '#4F46E5' },
  { name: 'Engineering', value: 32, color: '#818CF8' },
  { name: 'Marketing', value: 18, color: '#10B981' },
  { name: 'HR', value: 12, color: '#F59E0B' },
  { name: 'Sales', value: 10, color: '#EF4444' },
]

const moderationQueue = [
  { id: 1, type: 'post', content: 'Question about benefits...', author: 'John Doe', reported: '2h ago', status: 'pending' },
  { id: 2, type: 'comment', content: 'Inappropriate comment...', author: 'Jane Smith', reported: '5h ago', status: 'pending' },
  { id: 3, type: 'post', content: 'Spam content...', author: 'Bob Johnson', reported: '1d ago', status: 'reviewing' },
]

export default function AdminCommandCenter() {
  const [activeTab, setActiveTab] = useState<'overview' | 'moderation' | 'analytics' | 'settings'>('overview')

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="text-primary" size={28} />
            <h1 className="text-3xl font-bold text-text">Admin Command Center</h1>
          </div>
          <p className="text-muted">Monitor, manage, and optimize your organization's engagement platform</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 border-b border-border">
          {['overview', 'moderation', 'analytics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab ? 'text-primary' : 'text-muted hover:text-text'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-cards rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-primary" size={24} />
                  <TrendingUp className="text-success" size={20} />
                </div>
                <p className="text-2xl font-bold text-text">1,284</p>
                <p className="text-muted text-sm">Active Employees</p>
                <p className="text-xs text-success mt-2">+12% this month</p>
              </div>
              <div className="bg-cards rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="text-accent" size={24} />
                </div>
                <p className="text-2xl font-bold text-text">87%</p>
                <p className="text-muted text-sm">Engagement Rate</p>
                <p className="text-xs text-success mt-2">+5% vs last month</p>
              </div>
              <div className="bg-cards rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <Eye className="text-warning" size={24} />
                </div>
                <p className="text-2xl font-bold text-text">45.2K</p>
                <p className="text-muted text-sm">Total Views</p>
                <p className="text-xs text-success mt-2">+18% this week</p>
              </div>
              <div className="bg-cards rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <AlertCircle className="text-error" size={24} />
                </div>
                <p className="text-2xl font-bold text-text">12</p>
                <p className="text-muted text-sm">Pending Reports</p>
                <p className="text-xs text-error mt-2">Requires attention</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-cards rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-text mb-4">Engagement Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Tooltip />
                    <Area type="monotone" dataKey="engagement" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-cards rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-text mb-4">Department Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-cards rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text">Recent Platform Activity</h3>
                <button className="text-primary text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { action: 'New user registered', user: 'Sarah Chen', time: '5 minutes ago', type: 'user' },
                  { action: 'Post reported for review', user: 'Anonymous', time: '1 hour ago', type: 'report' },
                  { action: 'New department created', user: 'Admin', time: '3 hours ago', type: 'admin' },
                  { action: 'Recognition record broken', user: 'System', time: '5 hours ago', type: 'achievement' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'user' ? 'bg-primary' :
                        activity.type === 'report' ? 'bg-error' :
                        activity.type === 'admin' ? 'bg-accent' : 'bg-success'
                      }`} />
                      <div>
                        <p className="text-sm text-text">{activity.action}</p>
                        <p className="text-xs text-muted">by {activity.user}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'moderation' && (
          <div className="bg-cards rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text">Content Moderation Queue</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-border rounded-lg hover:bg-gray-50">
                  <Filter size={14} className="inline mr-1" />
                  Filter
                </button>
                <button className="px-3 py-1 text-sm border border-border rounded-lg hover:bg-gray-50">
                  <RefreshCw size={14} className="inline mr-1" />
                  Refresh
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {moderationQueue.map((item) => (
                <div key={item.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-warning/10 text-warning rounded-full">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted">Reported {item.reported}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-success hover:bg-success/10 rounded">
                        <CheckCircle size={16} />
                      </button>
                      <button className="p-1 text-error hover:bg-error/10 rounded">
                        <XCircle size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-text mb-2">{item.content}</p>
                  <p className="text-xs text-muted">Posted by {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}