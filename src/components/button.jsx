import { motion } from 'framer-motion';
import { FaSun } from 'react-icons/fa'; // Example icon, can be replaced

const Button = ({
  text = 'Button',
  icon = null,
  onClick,
  variant = 'primary', // primary, secondary, danger, etc.
  size = 'md', // sm, md, lg
  rounded = 'md', // sm, md, lg, full
  disabled = false,
  customStyles = '', // Additional custom Tailwind classes
  darkMode = false, // Toggle for dark mode
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Base styles for button and dark/light mode handling
  const baseStyles = `inline-flex items-center justify-center font-semibold focus:outline-none transition-all duration-300 ${sizeClasses[size]} ${rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`}`;
  
  // Button color variants
  const variantStyles = {
    primary: darkMode
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-blue-400 text-white hover:bg-blue-500',
    secondary: darkMode
      ? 'bg-gray-700 text-white hover:bg-gray-800'
      : 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: darkMode
      ? 'bg-red-500 text-white hover:bg-red-600'
      : 'bg-red-400 text-white hover:bg-red-500',
  };

  // Motion animation variant
  const buttonMotion = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${customStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </motion.button>
  );
};

export default Button;
