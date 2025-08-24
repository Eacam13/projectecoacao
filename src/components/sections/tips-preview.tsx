"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Home, School, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { curiosities } from '@/lib/mock/curiosities';
import { routes } from '@/lib/routes';

const categoryIcons = {
  casa: Home,
  escola: School,
  comunidade: Users,
};

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function TipsPreview() {
  const previewTips = curiosities.slice(0, 6);

  return (
    <section className="section bg-muted/30">
      <Container>
        <SectionTitle
          title="Dicas Práticas"
          subtitle="Ações simples que você pode implementar hoje mesmo para fazer a diferença"
        />
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {previewTips.map((tip) => {
            const CategoryIcon = categoryIcons[tip.category as keyof typeof categoryIcons];
            
            return (
              <motion.div key={tip.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="capitalize">
                        {CategoryIcon && <CategoryIcon className="w-3 h-3 mr-1" />}
                        {tip.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {tip.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {tip.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Button size="lg" asChild>
            <Link href={routes.tips}>
              Ver Todas as Dicas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}