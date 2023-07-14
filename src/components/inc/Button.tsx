'use client';

import clsx from 'clsx';
import type { ReactNode } from 'react';

type ButtonVariant = 'white' | 'blue';
type ButtonSize = 'lg' | 'base';

type ButtonProps = {
	label?: string;
	variant: ButtonVariant;
	size: ButtonSize;
	onClick?: () => void;
	children: ReactNode;
};

export const Button = ({
	label,
	variant,
	size,
	onClick = undefined,
	children,
}: ButtonProps) => {
	return (
		<button
			aria-label={label}
			className={clsx(
				'rounded-md border-[1px] font-medium tracking-wide transition-colors duration-[400ms] focus-visible:outline-offset-[6px]',
				{
					'border-accent-blue lg:hover:bg-primary-light lg:hover:text-theme-base':
						variant === 'white',
					'border-accent-base lg:hover:bg-accent-base':
						variant === 'blue',
				},
				{
					'px-5 py-2.5 md:px-7 md:py-3 md:text-xl': size === 'lg',
					'px-4 py-2 text-sm': size === 'base',
				}
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};