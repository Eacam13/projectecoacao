"use client";

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { routes } from '@/lib/routes';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <Container>
        <div className="py-24 lg:py-32">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                  🌱 Sustentabilidade em Ação
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                variants={itemVariants}
              >
                Transforme o mundo com{' '}
                <span className="text-primary">pequenas ações</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-muted-foreground max-w-2xl"
                variants={itemVariants}
              >
                Descubra práticas sustentáveis, aprenda sobre meio ambiente e 
                junte-se a uma comunidade comprometida com um futuro mais verde. 
                Cada ação conta na construção de um planeta melhor.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button size="lg" asChild className="group">
                  <Link href={routes.modules}>
                    Explorar Módulos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                {/* <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Ver Demonstração
                </Button> */}
              </motion.div>
              
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left"
                variants={itemVariants}
              >
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Dicas Práticas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Módulos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">1K+</div>
                  <div className="text-sm text-muted-foreground">Estudantes</div>
                </div>
              </motion.div>
            </div>
            
            {/* Hero Image */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop&crop=top"
                  alt="Mãos plantando uma pequena planta verde"
                  width={800}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-xs font-medium text-foreground">CO₂ Reduzido</div>
                  <div className="text-lg font-bold text-primary">-25%</div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-xs font-medium text-foreground">Energia Limpa</div>
                  <div className="text-lg font-bold text-primary">+40%</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}