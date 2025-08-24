"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Home, School, Users, Copy, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { curiosities } from '@/lib/mock/curiosities';

const categoryIcons = {
  casa: Home,
  escola: School,
  comunidade: Users,
};

const categories = [
  { id: 'all', name: 'Todas', icon: null },
  { id: 'casa', name: 'Casa', icon: Home },
  { id: 'escola', name: 'Escola', icon: School },
  { id: 'comunidade', name: 'Comunidade', icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function CuriositiesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCuriosities = curiosities.filter(curiosity => {
    const matchesSearch = curiosity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curiosity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || curiosity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyTip = async (tipId: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(tipId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      {/* Filters */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar dicas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="h-8"
              >
                {Icon && <Icon className="w-3 h-3 mr-1" />}
                {category.name}
              </Button>
            );
          })}
        </div>
      </motion.div>

      {/* Results count */}
      <motion.p
        className="text-sm text-muted-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredCuriosities.length} dica{filteredCuriosities.length !== 1 ? 's' : ''} encontrada{filteredCuriosities.length !== 1 ? 's' : ''}
      </motion.p>

      {/* Tips Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredCuriosities.map((curiosity) => {
          const CategoryIcon = categoryIcons[curiosity.category as keyof typeof categoryIcons];
          const isCopied = copiedId === curiosity.id;
          
          return (
            <motion.div key={curiosity.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="capitalize">
                      {CategoryIcon && <CategoryIcon className="w-3 h-3 mr-1" />}
                      {curiosity.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {curiosity.difficulty}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopyTip(curiosity.id, `${curiosity.title}\n\n${curiosity.description}`)}
                      >
                        {isCopied ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                    {curiosity.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {curiosity.description}
                  </p>
                  
                  {curiosity.impact && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-primary mb-1">
                        Impacto Potencial:
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {curiosity.impact}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* No results */}
      {filteredCuriosities.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-2">
            Nenhuma dica encontrada{searchTerm && ` para "${searchTerm}"`}.
          </p>
          <p className="text-sm text-muted-foreground">
            Tente usar termos diferentes ou selecionar outra categoria.
          </p>
        </motion.div>
      )}
    </div>
  );
}