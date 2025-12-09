import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  size = 'medium', 
  shape = 'rounded-md', 
  children, 
  onClick 
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-7 py-3.5 text-lg'
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium
        hover:bg-blue-700 active:bg-blue-800
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;