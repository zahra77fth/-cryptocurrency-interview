import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
                                           variant = 'primary',
                                           size = 'md',
                                           children,
                                           onClick,
                                           disabled = false,
                                           type = 'button',
                                           className = '',
                                       }) => {
    const baseStyles = 'font-semibold rounded';

    const variantStyles = {
        primary: 'bg-[--primary] text-white hover:bg-[--primary-hover]',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizeStyles = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-6 py-3 text-lg',
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const classes = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        className,
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    );
};

export default Button;
