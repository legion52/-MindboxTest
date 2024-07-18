import React from 'react';
import styles from './custom-h1.module.css';

interface CustomH1Props {
  children: React.ReactNode;
}

const H1: React.FC<CustomH1Props> = ({ children }) => {
  return <h1 className={styles.customH1}>{children}</h1>;
};

export default H1;