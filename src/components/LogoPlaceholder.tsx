import React, { useState } from 'react';
import { Shield, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface LogoPlaceholderProps {
  variant?: 'light' | 'dark' | 'compact';
  className?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ variant = 'light', className = '' }) => {
  const [imageError, setImageError] = useState(false);

  const isDark = variant === 'dark';

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-md border border-red-100 shrink-0 overflow-hidden p-1">
          {!imageError ? (
            <img
              src={SCHOOL_INFO.logoUrl}
              alt="Logo SMK Negeri 1 Bandar"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <Shield className="w-6 h-6 text-red-600" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border transition-all ${
        isDark
          ? 'bg-red-950/80 border-red-700/50 text-white'
          : 'bg-white border-red-200 text-red-900 shadow-sm'
      } ${className}`}
      title="Logo Resmi SMK Negeri 1 Bandar"
    >
      <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm shrink-0 overflow-hidden border border-gray-100">
        {!imageError ? (
          <img
            src={SCHOOL_INFO.logoUrl}
            alt="Logo SMK Negeri 1 Bandar"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <GraduationCap className="w-6 h-6 text-red-600" />
        )}
      </div>
      <div className="flex flex-col text-left">
        <span className={`text-[12px] font-black tracking-tight uppercase ${isDark ? 'text-white' : 'text-red-900'}`}>
          SMK NEGERI 1 BANDAR
        </span>
        <span className={`text-[10px] font-medium ${isDark ? 'text-red-300' : 'text-red-600'}`}>
          Kabupaten Simalungun
        </span>
      </div>
    </div>
  );
};
