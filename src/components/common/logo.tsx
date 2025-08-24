import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
        <Leaf className="h-5 w-5" />
      </div>
      {showText && (
        <span className="font-bold text-xl text-foreground">
          Eco<span className="text-primary">Ação</span>
        </span>
      )}
    </div>
  );
}