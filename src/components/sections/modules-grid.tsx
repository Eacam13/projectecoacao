"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { modules } from '@/lib/mock/modules';

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function ModulesGrid() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = modules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      {/* Search */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar módulos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </motion.div>

      {/* Results count */}
      <motion.p
        className="text-sm text-muted-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredModules.length} módulo{filteredModules.length !== 1 ? 's' : ''} encontrado{filteredModules.length !== 1 ? 's' : ''}
      </motion.p>

      {/* Modules Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredModules.map((module) => {
          const Icon = module.icon;
          
          return (
            <motion.div key={module.id} variants={itemVariants}>
              <Card className="h-full bg-green-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${module.color} text-white`}>
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <Badge variant="outline" className="capitalize text-blue-500">
                      {module.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-justify mb-4">
                    {module.description}
                  </p>
                  
                  {/* <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {module.duration}
                    </span>
                    <Badge variant="secondary">
                      {module.level}
                    </Badge>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* No results */}
      {filteredModules.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Nenhum módulo encontrado para &quot;{searchTerm}&quot;.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Tente usar termos diferentes ou navegue por todos os módulos disponíveis.
          </p>
        </motion.div>
      )}
    </div>
  );
}