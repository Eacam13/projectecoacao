export const routes = {
  home: '/',
  modules: '/modulos',
  tips: '/curiosidades',
  blog: '/blog',
  contact: '/contato',
} as const;

export type Route = typeof routes[keyof typeof routes];