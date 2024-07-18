import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button onClick={onClick} className={styles.customButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;