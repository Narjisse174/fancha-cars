interface PriceDisplayProps {
  price: number;
  period?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PriceDisplay({ price, period = '/jour', size = 'md' }: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl md:text-4xl',
  };

  return (
    <div className="flex items-baseline gap-1">
      <span className={`font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent ${sizeClasses[size]}`}>
        {price} €
      </span>
      <span className="text-slate-400 text-sm">{period}</span>
    </div>
  );
}
