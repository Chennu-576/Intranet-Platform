// src/app/directory/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Users, Mail, MapPin, Briefcase } from 'lucide-react'
import { useStore } from '@/store/store'
import { Employee } from '@/types'

export default function DirectoryPage() {
  const { employees } = useStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')

  const departments = ['all', ...new Set(employees.map(e => e.department))]

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-text mb-2">Employee Directory</h1>
          <p className="text-muted">Connect with colleagues across the organization</p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted hover:bg-gray-100'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Employee Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((employee, index) => (
              <motion.div
                key={employee.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-cards rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-text mb-1">{employee.name}</h3>
                    <p className="text-sm text-primary mb-2">{employee.role}</p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-muted">
                        <Briefcase size={12} className="mr-1" />
                        {employee.department}
                      </div>
                      <div className="flex items-center text-xs text-muted">
                        <MapPin size={12} className="mr-1" />
                        {employee.location}
                      </div>
                      <div className="flex items-center text-xs text-muted">
                        <Mail size={12} className="mr-1" />
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1">
                    {employee.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-muted mb-4" />
            <p className="text-muted">No employees found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}