export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marina Oliveira',
    role: 'Estudante do 3º Ano',
    quote: 'O EcoAção mudou completamente minha perspectiva sobre sustentabilidade. Agora lidero projetos ambientais na minha escola e vejo o impacto real das pequenas ações.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5b8?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '2',
    name: 'Pedro Santos',
    role: 'Estudante do 2º Ano',
    quote: 'As dicas práticas me ajudaram a implementar um sistema de compostagem em casa. Minha família ficou impressionada com os resultados e agora todos participam!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '3',
    name: 'Julia Costa',
    role: 'Estudante do 1º Ano',
    quote: 'Através dos módulos, aprendi sobre energia renovável e convenci meus pais a instalar painéis solares. Estamos economizando muito na conta de luz!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '4',
    name: 'Lucas Ferreira',
    role: 'Estudante do 3º Ano',
    quote: 'O conteúdo é super didático e aplicável. Consegui criar uma horta vertical na escola que já produziu mais de 50kg de alimentos orgânicos!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '5',
    name: 'Amanda Silva',
    role: 'Estudante do 2º Ano',
    quote: 'Me inspirei nos depoimentos e organizei um mutirão de limpeza no meu bairro. Foi incrível ver como a comunidade se uniu pela causa ambiental!',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '6',
    name: 'Thiago Almeida',
    role: 'Estudante do 1º Ano',
    quote: 'Os módulos sobre biodiversidade me fizeram entender a importância da preservação. Agora participo ativamente de projetos de reflorestamento.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
];