// src/components/feed/FeedCard.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import { FeedPost } from '@/types'
import { formatDistanceToNow } from 'date-fns'
import { useStore } from '@/store/store'
import { cn } from '@/lib/utils'

interface FeedCardProps {
  post: FeedPost
}

export default function FeedCard({ post }: FeedCardProps) {
  const [liked, setLiked] = useState(false)
  const { likePost } = useStore()

  const handleLike = () => {
    if (!liked) {
      likePost(post.id)
      setLiked(true)
    }
  }

  const getTypeIcon = () => {
    switch (post.type) {
      case 'announcement':
        return '📢'
      case 'recognition':
        return '🌟'
      case 'story':
        return '📖'
      default:
        return '💬'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-cards rounded-xl border border-border p-6 transition-all duration-200 hover:shadow-md"
    >
      {/* Header */}
      <div className="flex items-start space-x-3 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-text">{post.author.name}</h3>
            <span className="text-xs text-muted">{post.author.role}</span>
          </div>
          <p className="text-xs text-muted">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
        <div className="text-xl">{getTypeIcon()}</div>
      </div>

      {/* Content */}
      <p className="text-text mb-4 leading-relaxed">{post.content}</p>

      {/* Actions */}
      <div className="flex items-center space-x-6 pt-4 border-t border-border">
        <button
          onClick={handleLike}
          className={cn(
            "flex items-center space-x-2 text-sm transition-colors",
            liked ? "text-primary" : "text-muted hover:text-primary"
          )}
        >
          <Heart size={18} className={liked ? "fill-current" : ""} />
          <span>{post.likes}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-muted hover:text-primary transition-colors">
          <MessageCircle size={18} />
          <span>{post.comments.length}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-muted hover:text-primary transition-colors">
          <Share2 size={18} />
          <span>{post.shares}</span>
        </button>
      </div>

      {/* Comments Preview */}
      {post.comments.length > 0 && (
        <div className="mt-4 space-y-3">
          {post.comments.slice(0, 2).map((comment) => (
            <div key={comment.id} className="pl-4 border-l-2 border-border">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-text">{comment.author.name}</span>
                <span className="text-xs text-muted">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </span>
              </div>
              <p className="text-sm text-muted">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}