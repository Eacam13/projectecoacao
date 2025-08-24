"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! (Este é um placeholder)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-brand-background text-brand-text-base">
  {/* Hero Section */}
  <section className="relative py-12 lg:py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          Fale Conosco
        </h1>
        <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
          Estamos aqui para ajudar! Envie-nos uma mensagem ou entre em contato pelos nossos canais.
        </p>
      </motion.div>
    </Container>
  </section>

  {/* Contact Form and Info Section */}
  <section className="py-12 lg:py-16 -mt-8">
    <Container>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          <SectionTitle pretitle="Envie sua mensagem" title="Preencha o formulário" align="left" />
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="subject">Assunto</Label>
              <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-brand-secondary hover:bg-brand-secondary-dark text-white transition-all">
              Enviar Mensagem
            </Button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          <SectionTitle pretitle="Nossos Contatos" title="Informações de Contato" align="left" />
          <div className="mt-6 space-y-4">
            <Card className="p-5 flex items-start space-x-4 bg-brand-background-alt shadow-md hover:shadow-lg transition-shadow rounded-lg border border-border">
              <Mail className="h-6 w-6 text-brand-primary" />
              <div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardContent className="p-0 text-muted-foreground">contato@projectecoacao.com</CardContent>
              </div>
            </Card>
            <Card className="p-5 flex items-start space-x-4 bg-brand-background-alt shadow-md hover:shadow-lg transition-shadow rounded-lg border border-border">
              <Phone className="h-6 w-6 text-brand-primary" />
              <div>
                <CardTitle className="text-lg">Telefone</CardTitle>
                <CardContent className="p-0 text-muted-foreground">+55 (XX) XXXX-XXXX</CardContent>
              </div>
            </Card>
            <Card className="p-5 flex items-start space-x-4 bg-brand-background-alt shadow-md hover:shadow-lg transition-shadow rounded-lg border border-border">
              <MapPin className="h-6 w-6 text-brand-primary" />
              <div>
                <CardTitle className="text-lg">Endereço</CardTitle>
                <CardContent className="p-0 text-muted-foreground">Rua Exemplo, 123 - Cidade, Estado</CardContent>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
</div>

  );
}