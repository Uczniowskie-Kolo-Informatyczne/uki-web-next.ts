'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { getButtonStyles, type ButtonSize, type ButtonVariant } from './Button';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonLinkProps = {
	label?: string;
	variant: ButtonVariant;
	size: ButtonSize;
	disabled?: boolean;
	children: ReactNode;
} & Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof LinkProps | 'className'
> &
	LinkProps;

export const ButtonLink = ({
	label,
	variant,
	size,
	children,
	disabled = false,
	...rest
}: ButtonLinkProps) => {
	return (
		<Link
			{...rest}
			aria-disabled={disabled}
			aria-label={label}
			className={clsx(
				getButtonStyles(variant, size, disabled),
				'inline-block'
			)}
		>
			{children}
		</Link>
	);
};
