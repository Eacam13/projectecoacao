import { 
  Recycle, 
  Zap, 
  Droplet, 
  TreePine, 
  Car, 
  ShoppingCart,
  Wind,
  Sun 
} from 'lucide-react';

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
  type: string;
}

export const modules: Module[] = [
  {
    id: '1',
    slug: 'reciclagem-e-reutilizacao',
    title: 'Reciclagem e Reutilização',
    description: 'Ambas as práticas são fundamentais para a sustentabilidade, pois reduzem o volume de lixo e o desperdício de recursos naturais.',
    category: 'residuos',
    type: 'Prática',
    icon: Recycle,
    color: 'bg-green-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '2',
    slug: 'energia-renovavel',
    title: 'Energia Renovável',
    description: 'Gerada a partir de fontes naturais que se regeneram constantemente e não se esgotam, como a solar, eólica, hídrica, biomassa, geotérmica e oceânica.',
    category: 'energia',
    type: 'Conceito',
    icon: Zap,
    color: 'bg-yellow-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '3',
    slug: 'conservacao-agua',
    title: 'Conservação da Água',
    description: 'A preservação da água envolve a redução do desperdício através de práticas diárias, como fechar a torneira ao escovar os dentes e reduzir o tempo no banho, além de reparar vazamentos e reutilizar a água sempre que possível.',
    category: 'agua',
    type: 'Dica',
    icon: Droplet,
    color: 'bg-blue-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '4',
    slug: 'biodiversidade-ecossistemas',
    title: 'Biodiversidade e Ecossistemas',
    description: 'Saiba como plantas e animais mantêm o equilíbrio natural e o que podemos fazer para proteger a biodiversidade.',
    category: 'biodiversidade',
    type: 'Conceito',
    icon: TreePine,
    color: 'bg-emerald-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '5',
    slug: 'mobilidade-sustentavel',
    title: 'Mobilidade Sustentável',
    description: 'Entenda como bicicletas, transporte público e veículos elétricos ajudam a reduzir a poluição urbana.',
    category: 'transporte',
    type: 'Prática',
    icon: Car,
    color: 'bg-purple-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '6',
    slug: 'consumo-consciente',
    title: 'Consumo Consciente',
    description: 'Reflita sobre escolhas de consumo, evite desperdícios e prefira produtos sustentáveis.',
    category: 'consumo',
    type: 'Dica',
    icon: ShoppingCart,
    color: 'bg-orange-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '7',
    slug: 'energia-solar',
    title: 'Energia Solar',
    description: 'Conheça o potencial da energia solar e como ela já transforma comunidades em todo o mundo.',
    category: 'energia',
    type: 'Conceito',
    icon: Sun,
    color: 'bg-amber-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
  {
    id: '8',
    slug: 'energia-eolica',
    title: 'Energia Eólica',
    description: 'Veja como os ventos podem gerar eletricidade limpa e reduzir a dependência de combustíveis fósseis.',
    category: 'energia',
    type: 'Conceito',
    icon: Wind,
    color: 'bg-sky-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
];

