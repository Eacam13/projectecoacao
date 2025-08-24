export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  icon: any;
  color: string;
}

export interface Curiosity {
  id: string;
  title: string;
  description: string;
  category: 'casa' | 'escola' | 'comunidade';
  difficulty: 'Fácil' | 'Moderado' | 'Desafiador';
  impact?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  grade: string;
  school: string;
  date: string;
  tags: string[];
  featured?: boolean;
  impact?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Highlight {
  icon: any;
  value: string;
  label: string;
  description: string;
  color: string;
}