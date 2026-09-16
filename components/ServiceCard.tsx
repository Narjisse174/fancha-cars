import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex gap-5 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-blue-500/30 hover:bg-slate-800/70 transition-all duration-200 group">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/15 to-indigo-600/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-600/25 group-hover:to-indigo-600/25 transition-all duration-200">
        <Icon size={22} className="text-blue-400" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
