import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ 
  title, 
  subtitle, 
  className, 
  align = 'center' 
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', {
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    }, className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}