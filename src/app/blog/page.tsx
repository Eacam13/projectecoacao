import { BlogList } from '@/components/sections/blog-list';
import { Container } from '@/components/common/container';
import { SectionTitle } from '@/components/common/section-title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Depoimentos e Blog',
  description: 'Leia depoimentos inspiradores de estudantes que estão fazendo a diferença no meio ambiente.',
};

export default function BlogPage() {
  return (
    <div className="section-sm">
      <Container>
        <SectionTitle
          title="Depoimentos e Blog"
          subtitle="Histórias inspiradoras de estudantes que estão transformando suas comunidades através de ações sustentáveis"
        />
        <BlogList />
      </Container>
    </div>
  );
}