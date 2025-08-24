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
    description: 'Esses dois conceitos estão intrinsecamente ligados, pois a biodiversidade é a variedade dos seres vivos dentro de cada ecossistema, e a preservação de uma alta biodiversidade é crucial para a saúde e estabilidade de um ecossistema',
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
    description: 'É um sistema de transporte que equilibra as necessidades de deslocamento com a preservação ambiental, o bem-estar social e a viabilidade económica, promovendo o uso de meios de transporte eficientes, não poluentes e a integração modal, em vez do predomínio de veículos motorizados individuais.',
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
    description: 'É um modo de consumir que considera os impactos sociais, ambientais e económicos das escolhas individuais, buscando um estilo de vida mais sustentável.',
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
    description: 'É um termo que se refere à energia proveniente da luz e do calor do Sol. É utilizada por meio de diferentes tecnologias em constante evolução, como o aquecimento solar, a energia solar fotovoltaica, a energia heliotérmica, a arquitetura solar e a fotossíntese artificial.',
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
    description: 'É uma forma de energia renovável e limpa que usa o vento para gerar eletricidade, através de aerogeradores, que convertem a força do vento em energia mecânica e depois em elétrica.',
    category: 'energia',
    type: 'Conceito',
    icon: Wind,
    color: 'bg-sky-500',
    level: 'Iniciante',
    duration: '1h 30min',
  },
];

