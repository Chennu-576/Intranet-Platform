// src/app/knowledge/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, FileText, HelpCircle, Video, Download, Eye, ThumbsUp, Filter, ChevronRight } from 'lucide-react'
import { mockKnowledgeArticles } from '@/data/mockData'

const categories = [
  { name: 'All', icon: BookOpen, count: 24 },
  { name: 'Policies', icon: FileText, count: 8 },
  { name: 'Handbooks', icon: BookOpen, count: 6 },
  { name: 'FAQs', icon: HelpCircle, count: 12 },
  { name: 'Tutorials', icon: Video, count: 15 },
  { name: 'Resources', icon: Download, count: 20 },
]

export default function KnowledgeHubPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const filteredArticles = mockKnowledgeArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
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
          <h1 className="text-3xl font-bold text-text mb-2">Knowledge Hub</h1>
          <p className="text-muted">Find policies, guides, and resources</p>
        </motion.div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
          <input
            type="text"
            placeholder="Search articles, policies, or FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-cards"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-cards rounded-xl border border-border p-4 sticky top-8">
              <h3 className="font-semibold text-text mb-4 flex items-center">
                <Filter size={16} className="mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon size={16} />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-xs">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-cards rounded-xl border border-border p-6 cursor-pointer hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText size={20} className="text-primary" />
                    </div>
                    <span className="text-xs text-muted">Updated {new Date(article.updatedAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-semibold text-text mb-2">{article.title}</h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2">{article.content}</p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye size={12} className="mr-1" />
                        {article.views} views
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp size={12} className="mr-1" />
                        {article.helpful}% helpful
                      </span>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-cards rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-text mb-4">{selectedArticle.title}</h2>
            <div className="prose prose-sm max-w-none">
              <p>{selectedArticle.content}</p>
            </div>
            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}