// components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  center?: boolean;
  className?: string;
  mb?: '4' | '6' | '8' | '12' | '16';
  dividerColor?: string;
  textColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  center = false,
  className = '',
  mb = '6',
  dividerColor = 'bg-orange-500',
  textColor = 'text-orange-500',
}) => {
  return (
    <div 
      className={`flex items-center ${center ? 'justify-center' : 'justify-start'} mb-${mb} ${className}`}
    >
      <div className={`h-[3px] w-10 ${dividerColor} mr-3`} />
      <span className={`${textColor} font-michroma uppercase tracking-widest text-sm`}>
        {title}
      </span>
      <div className={`h-[3px] w-10 ${dividerColor} ml-3`} />
    </div>
  );
};