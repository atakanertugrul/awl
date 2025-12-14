import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'danger' | 'neutral' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 shadow-lg",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200 shadow-lg",
    danger: "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200 shadow-lg",
    neutral: "bg-slate-200 text-slate-700 hover:bg-slate-300",
    outline: "border-2 border-slate-300 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 bg-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};