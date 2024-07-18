import React from 'react';
import styles from './text-button.module.css';

interface TextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button onClick={onClick} className={styles.customButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default TextButton;