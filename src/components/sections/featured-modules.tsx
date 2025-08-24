"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { modules } from '@/lib/mock/modules';
import { routes } from '@/lib/routes';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function FeaturedModules() {
  const featuredModules = modules.slice(0, 3);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Módulos em Destaque"
          subtitle="Explore nossos módulos educativos mais populares sobre sustentabilidade"
        />
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredModules.map((module) => {
            const Icon = module.icon;
            
            return (
              <motion.div key={module.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${module.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground">
                      {module.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="ghost" className="group/btn w-full justify-between">
                      Explorar Módulo
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
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
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href={routes.modules}>
              Ver Todos os Módulos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}