'use client';

import * as Accordion from '@radix-ui/react-accordion';
import type { ReactNode } from 'react';

type AccordionHeaderProps = {
	children: ReactNode;
};

export const AccordionHeader = ({ children }: AccordionHeaderProps) => {
	return (
		<Accordion.Header>
			<Accordion.Trigger>{children}</Accordion.Trigger>
		</Accordion.Header>
	);
};
