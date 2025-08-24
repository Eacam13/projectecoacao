import { ModulesGrid } from '@/components/sections/modules-grid';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Módulos de Sustentabilidade',
  description: 'Explore nossos módulos educativos sobre sustentabilidade: reciclagem, energia, água, biodiversidade e muito mais.',
};

export default function ModulosPage() {
  return (
    <div className="section-sm border-l-green-200">
      <Container>
        <SectionTitle
          title="Módulos de Sustentabilidade"
          subtitle="Aprenda sobre diferentes aspectos da sustentabilidade através dos nossos módulos educativos"
        />
        <ModulesGrid />
      </Container>
    </div>
  );
}