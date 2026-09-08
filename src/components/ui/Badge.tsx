import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'junior' | 'senior' | 'open' | 'closed' | 'default';
  className?: string;
}

const variantStyles: Record<string, string> = {
  junior: 'bg-[#3B3E4C] text-[#E2E8F0]',
  senior: 'bg-[#4B5563] text-white',
  open: 'bg-[#2E7D32] text-white',
  closed: 'bg-[#1E2028] text-[#94A3B8]',
  default: 'bg-[#3B3E4C] text-white',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const currentVariant = variantStyles[variant] || variantStyles.default;
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold'
    + ' tracking-wide uppercase transition-colors';

  return (
    <span className={`${baseClasses} ${currentVariant} ${className}`}>
      {children}
    </span>
  );
}
