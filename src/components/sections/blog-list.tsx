"use client";

import { motion } from 'framer-motion';
import { Calendar, User, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/lib/mock/posts';
import { formatDate } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BlogList() {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>
                    {post.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{post.author}</h3>
                  <p className="text-xs text-muted-foreground">
                    {post.grade} • {post.school}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </div>
                
                {post.featured && (
                  <Badge variant="secondary" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <h2 className="font-semibold text-lg mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {post.impact && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-primary mb-1">
                    Impacto Relatado:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {post.impact}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}