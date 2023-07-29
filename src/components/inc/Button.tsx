'use client';

import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'white' | 'blue' | 'blue-fill';
export type ButtonSize = 'lg' | 'base';

type ButtonProps = {
	label?: string;
	variant: ButtonVariant;
	size: ButtonSize;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const getButtonStyles = (
	variant: ButtonVariant,
	size: ButtonSize,
	disabled: boolean
) => {
	return clsx(
		'w-full rounded-md border-[1px] font-medium tracking-wide transition-colors duration-[400ms] focus-visible:outline-offset-[6px]',
		{
			'border-accent-blue lg:hover:bg-primary-light lg:hover:text-theme-base':
				variant === 'white',
			'border-accent-base lg:hover:bg-accent-base': variant === 'blue',
			'border-accent-base bg-accent-base lg:hover:bg-transparent':
				variant === 'blue-fill',
		},
		{
			'px-5 py-2.5 md:px-7 md:py-3 md:text-xl': size === 'lg',
			'px-4 py-2 text-sm': size === 'base',
		},
		{
			'cursor-not-allowed opacity-80': disabled,
		}
	);
};

export const Button = ({
	label,
	variant,
	size,
	onClick = undefined,
	children,
	disabled,
	...rest
}: ButtonProps) => {
	return (
		<button
			{...rest}
			disabled={disabled}
			aria-label={label}
			className={getButtonStyles(variant, size, Boolean(disabled))}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
