'use client';

import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type Rounded =
	| 'none'
	| 'sm'
	| 'base'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| 'full';

const roundedStyles = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	base: 'rounded',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	'2xl': 'rounded-2xl',
	'3xl': 'rounded-3xl',
	full: 'rounded-full',
} as const;

type AccordionHeaderProps = {
	rounded: Rounded;
	children: ReactNode;
};

export const AccordionHeader = ({
	rounded,
	children,
}: AccordionHeaderProps) => {
	return (
		<Accordion.Header>
			<Accordion.Trigger
				className={clsx('w-full', roundedStyles[rounded])}
			>
				{children}
			</Accordion.Trigger>
		</Accordion.Header>
	);
};
