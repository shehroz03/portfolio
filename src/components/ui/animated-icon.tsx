import React from 'react';

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

export function AnimatedIcon({ 
  children, 
  className = '', 
  floating = false, 
  onClick, 
  href,
  ariaLabel
}: AnimatedIconProps) {
  const animationClasses = `
    icon-hover
    ${floating ? 'icon-float' : ''}
    ${className}
  `;

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={animationClasses}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={animationClasses}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={animationClasses}>
      {children}
    </span>
  );
}