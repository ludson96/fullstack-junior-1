import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'junior' | 'senior' | 'open' | 'closed' | 'default';
  className?: string;
}

const variantStyles: Record<string, string> = {
  junior: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  senior: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  open: 'bg-[#DB2A6B]/15 text-[#FF5B99] border-[#DB2A6B]/30',
  closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  default: 'bg-white/10 text-gray-300 border-white/10',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const currentVariant = variantStyles[variant] || variantStyles.default;
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold'
    + ' tracking-wider uppercase border backdrop-blur-sm transition-all duration-200';

  return (
    <span className={`${baseClasses} ${currentVariant} ${className}`}>
      {children}
    </span>
  );
}
