import { Metadata } from 'next';

export const seoConfig = {
  defaultMeta: {
    title: 'EcoAção - Sustentabilidade em Ação',
    description: 'Plataforma educativa para promover conscientização ambiental e práticas sustentáveis. Aprenda, pratique e transforme o mundo com pequenas ações.',
    keywords: ['sustentabilidade', 'meio ambiente', 'educação ambiental', 'ecologia', 'preservação', 'reciclagem'],
    authors: [{ name: 'EcoAção Team' }],
    creator: 'EcoAção',
    publisher: 'EcoAção',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: 'https://ecoacao.com',
      siteName: 'EcoAção',
      title: 'EcoAção - Sustentabilidade em Ação',
      description: 'Plataforma educativa para promover conscientização ambiental e práticas sustentáveis.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
          alt: 'EcoAção - Sustentabilidade em Ação',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ecoacao',
      creator: '@ecoacao',
    },
  },
};

export function generatePageMeta({
  title,
  description,
  path = '',
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title 
    ? `${title} | ${seoConfig.defaultMeta.title}`
    : seoConfig.defaultMeta.title;
  
  const pageDescription = description || seoConfig.defaultMeta.description;
  const pageUrl = `https://ecoacao.com${path}`;
  const pageImage = image || seoConfig.defaultMeta.openGraph?.images?.[0]?.url;

  return {
    ...seoConfig.defaultMeta,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...seoConfig.defaultMeta.openGraph,
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      images: pageImage ? [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || seoConfig.defaultMeta.title,
        },
      ] : seoConfig.defaultMeta.openGraph?.images,
    },
    twitter: {
      ...seoConfig.defaultMeta.twitter,
      title: pageTitle,
      description: pageDescription,
      images: pageImage ? [pageImage] : undefined,
    },
  };
}