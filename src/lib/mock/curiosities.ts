export interface Curiosity {
  id: string;
  title: string;
  description: string;
  category: 'casa' | 'escola' | 'comunidade';
  difficulty: 'Fácil' | 'Moderado' | 'Desafiador';
  impact?: string;
}

export const curiosities: Curiosity[] = [
  {
    id: '1',
    title: 'Reutilize garrafas PET como vasos',
    description: 'Corte garrafas PET pela metade e use a parte de baixo como vaso para plantas pequenas. Faça furos no fundo para drenagem e decore com tinta ou tecido.',
    category: 'casa',
    difficulty: 'Fácil',
    impact: 'Reduz o descarte de plástico e promove o cultivo de plantas',
  },
  {
    id: '2',
    title: 'Apague as luzes ao sair dos ambientes',
    description: 'Criar o hábito de apagar luzes e desligar equipamentos eletrônicos ao sair dos ambientes pode reduzir significativamente o consumo de energia.',
    category: 'casa',
    difficulty: 'Fácil',
    impact: 'Economia de até 15% na conta de luz mensal',
  },
  {
    id: '3',
    title: 'Colete água da chuva para jardim',
    description: 'Posicione baldes ou recipientes para coletar água da chuva. Use essa água para regar plantas e jardins, economizando água tratada.',
    category: 'casa',
    difficulty: 'Moderado',
    impact: 'Economia de até 50% no consumo de água para irrigação',
  },
  {
    id: '4',
    title: 'Faça compostagem com restos orgânicos',
    description: 'Separe cascas de frutas, verduras e outros restos orgânicos para fazer compostagem. Em poucos meses você terá adubo natural para plantas.',
    category: 'casa',
    difficulty: 'Moderado',
    impact: 'Reduz 30% do lixo doméstico e produz adubo natural',
  },
  {
    id: '5',
    title: 'Use sacolas reutilizáveis para compras',
    description: 'Mantenha sacolas de tecido ou reutilizáveis sempre à mão para ir ao supermercado. Evite o uso de sacolas plásticas descartáveis.',
    category: 'casa',
    difficulty: 'Fácil',
    impact: 'Uma família pode evitar o uso de 300+ sacolas plásticas por ano',
  },
  {
    id: '6',
    title: 'Crie um clube de sustentabilidade',
    description: 'Organize um grupo de estudantes interessados em projetos ambientais. Desenvolvam ações como horta escolar, campanhas de conscientização e mutirões de limpeza.',
    category: 'escola',
    difficulty: 'Moderado',
    impact: 'Multiplicação das ações sustentáveis na comunidade escolar',
  },
  {
    id: '7',
    title: 'Implemente lixeiras seletivas',
    description: 'Proponha à direção da escola a instalação de lixeiras para coleta seletiva. Organize campanhas educativas sobre separação correta do lixo.',
    category: 'escola',
    difficulty: 'Desafiador',
    impact: 'Aumento de 60% na taxa de reciclagem escolar',
  },
  {
    id: '8',
    title: 'Organize mutirões de plantio',
    description: 'Coordene com a comunidade escolar o plantio de árvores nativas nos espaços da escola e arredores, promovendo maior biodiversidade local.',
    category: 'escola',
    difficulty: 'Moderado',
    impact: 'Cada árvore absorve aproximadamente 22kg de CO₂ por ano',
  },
  {
    id: '9',
    title: 'Promova o "Dia sem Carro"',
    description: 'Incentive colegas e professores a virem de bicicleta, a pé ou transporte público em dias específicos, reduzindo a emissão de poluentes.',
    category: 'escola',
    difficulty: 'Moderado',
    impact: 'Redução de 40% nas emissões de CO₂ nos dias de adesão',
  },
  {
    id: '10',
    title: 'Crie uma biblioteca de trocas',
    description: 'Organize um espaço onde estudantes podem trocar livros, materiais escolares e outros itens, promovendo o reuso e economia circular.',
    category: 'escola',
    difficulty: 'Fácil',
    impact: 'Reduz o consumo de materiais novos em até 25%',
  },
  {
    id: '11',
    title: 'Organize limpeza de praças e parques',
    description: 'Mobilize vizinhos para mutirões de limpeza em espaços públicos. Leve luvas, sacos e organize a separação do lixo coletado.',
    category: 'comunidade',
    difficulty: 'Moderado',
    impact: 'Melhora a qualidade ambiental e conscientização comunitária',
  },
  {
    id: '12',
    title: 'Inicie uma horta comunitária',
    description: 'Identifique espaços subutilizados no bairro e proponha a criação de hortas comunitárias, promovendo alimentação saudável e sustentável.',
    category: 'comunidade',
    difficulty: 'Desafiador',
    impact: 'Produção local de alimentos e redução da pegada de carbono',
  },
  {
    id: '13',
    title: 'Promova feira de trocas',
    description: 'Organize eventos onde moradores podem trocar objetos, roupas e livros que não usam mais, promovendo economia circular na comunidade.',
    category: 'comunidade',
    difficulty: 'Moderado',
    impact: 'Reduz o descarte e promove consumo consciente',
  },
  {
    id: '14',
    title: 'Crie campanhas de conscientização',
    description: 'Desenvolva materiais educativos sobre sustentabilidade e distribua no bairro, sensibilizando mais pessoas sobre práticas ambientais.',
    category: 'comunidade',
    difficulty: 'Moderado',
    impact: 'Multiplicação das práticas sustentáveis na vizinhança',
  },
  {
    id: '15',
    title: 'Implemente pontos de coleta seletiva',
    description: 'Articule com autoridades locais a instalação de pontos de coleta seletiva em locais estratégicos do bairro.',
    category: 'comunidade',
    difficulty: 'Desafiador',
    impact: 'Aumento significativo na taxa de reciclagem local',
  },
];