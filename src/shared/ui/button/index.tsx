import React from 'react';

import styles from './styles.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isRoundedFull?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'white' | 'yellow';
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const {
      isRoundedFull = false,
      size = 'medium',
      variant = 'contained',
      color = 'white',
      className,
      children,
      ...otherProps
    } = props;

    return (
      <button
        {...otherProps}
        ref={ref}
        className={`${styles.button} ${className} ${styles[size]} ${styles[variant]} ${styles[color]} ${isRoundedFull ? styles.roundedFull : ''}`}
      >
        {children}
      </button>
    );
  }
);
