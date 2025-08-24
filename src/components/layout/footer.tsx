import Link from 'next/link';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import { Logo } from '@/components/common/logo';
import { Container } from '@/components/common/container';
import { routes } from '@/lib/routes';

const footerLinks = [
  {
    title: 'Navegação',
    links: [
      { name: 'Início', href: routes.home },
      { name: 'Módulos', href: routes.modules },
      { name: 'Dicas', href: routes.tips },
      { name: 'Blog', href: routes.blog },
      { name: 'Contato', href: routes.contact },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Sobre', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-green-200 border-t border-border">
  <Container>
    <div className="py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            EcoAção é uma plataforma educativa dedicada a promover a conscientização
            ambiental e práticas sustentáveis para um futuro mais verde.
          </p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border/30 flex justify-center">
        <p className="text-sm text-muted-foreground text-center">
          © 2024 EcoAção. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </Container>
</footer>

  );
}
