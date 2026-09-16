import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, dark = false }: FeatureCardProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 group ${
      dark
        ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/40'
        : 'bg-white border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/20'
    }`}>
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-200">
        <Icon size={22} className="text-blue-500" />
      </div>
      <h3 className={`font-semibold text-base mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        {description}
      </p>
    </div>
  );
}
