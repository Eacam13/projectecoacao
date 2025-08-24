import { CuriositiesList } from '@/components/sections/curiosities-list';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dicas e Curiosidades',
  description: 'Descubra dicas práticas e curiosidades sobre sustentabilidade para aplicar em casa, na escola e na comunidade.',
};

export default function CuriosidadesPage() {
  return (
    <div className="section-sm">
      <Container>
        <SectionTitle
          title="Dicas e Curiosidades"
          subtitle="Práticas sustentáveis para o dia a dia, organizadas por contexto para facilitar sua aplicação"
        />
        <CuriositiesList />
      </Container>
    </div>
  );
}