import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'creative';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none relative group uppercase tracking-widest text-xs';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 rounded-full',
    secondary: 'bg-[#00AEEF] text-white hover:shadow-lg rounded-full',
    outline: 'border border-white/20 text-white hover:bg-white hover:text-black rounded-full',
    ghost: 'text-neutral-400 hover:text-white rounded-full',
    creative: 'bg-[#EC008C] text-white hover:bg-[#ff0080] rounded-full shadow-lg shadow-[#EC008C]/20'
  };

  const sizes = {
    sm: 'px-5 py-2.5',
    md: 'px-8 py-3.5',
    lg: 'px-12 py-5'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;