'use client';

import type { ReactNode } from 'react';

type ButtonProps = {
	label?: string;
	onClick?: () => void;
	children: ReactNode;
};

export const Button = ({
	label,
	onClick = undefined,
	children,
}: ButtonProps) => {
	return (
		<button
			aria-label={label}
			className="rounded-md border-[1px] border-primary-light px-5 py-2.5 font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-[6px] md:px-7 md:py-3 md:text-xl lg:hover:bg-primary-light lg:hover:text-theme-base"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
