import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100) || 0;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 text-sm font-medium text-slate-500">
        <span>Öğrenilen: {current}</span>
        <span>{percentage}%</span>
        <span>Toplam: {total}</span>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};