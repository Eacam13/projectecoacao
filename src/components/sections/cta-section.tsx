"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { routes } from '@/lib/routes';

export function CtaSection() {
  return (
    <section className="section bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
          
          <h2 className="text-3xl text-yellow-50 sm:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para fazer a diferença?
          </h2>
          
          <p className="text-lg text-yellow-50 opacity-90 mb-8">
            Junte-se a milhares de estudantes que já estão transformando o mundo 
            através de ações sustentáveis. Comece sua jornada hoje mesmo!
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href={routes.modules}>
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10">
              <Link href={routes.tips}>
                Saiba Mais
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}