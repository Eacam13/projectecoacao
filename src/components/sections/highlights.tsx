"use client";

import { motion } from 'framer-motion';
import { TreePine, Droplet, Zap, Recycle } from 'lucide-react';
import { Container } from '@/components/common/container';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: TreePine,
    value: '+500',
    label: 'Árvores Plantadas',
    description: 'Através das ações dos nossos estudantes',
    color: 'text-green-500',
  },
  {
    icon: Droplet,
    value: '30%',
    label: 'Economia de Água',
    description: 'Média de redução no consumo',
    color: 'text-blue-500',
  },
  {
    icon: Zap,
    value: '25%',
    label: 'Energia Renovável',
    description: 'Projetos implementados',
    color: 'text-yellow-500',
  },
  {
    icon: Recycle,
    value: '2T',
    label: 'Material Reciclado',
    description: 'Toneladas desviadas dos aterros',
    color: 'text-emerald-500',
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Highlights() {
  return (
    <section className="section bg-muted/30">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${highlight.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {highlight.value}
                    </motion.div>
                    
                    <h3 className="font-semibold text-foreground mb-2">
                      {highlight.label}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}