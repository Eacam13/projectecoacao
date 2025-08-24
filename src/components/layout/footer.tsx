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

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contato@ecoacao.com' },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
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

              {/* Social Links */}
              {/* <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div> */}
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex justify-center">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 EcoAção. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}