import { Hero } from '@/components/sections/hero';
import { Highlights } from '@/components/sections/highlights';
import { FeaturedModules } from '@/components/sections/featured-modules';
import { TipsPreview } from '@/components/sections/tips-preview';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedModules />
      <TipsPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}