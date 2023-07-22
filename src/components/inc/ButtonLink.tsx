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
	...rest
}: ButtonLinkProps) => {
	return (
		<Link
			{...rest}
			aria-label={label}
			className={clsx(getButtonStyles(variant, size), 'inline-block')}
		>
			{children}
		</Link>
	);
};
