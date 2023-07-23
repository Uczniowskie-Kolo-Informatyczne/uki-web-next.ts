'use client';

import type { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

type AccordionContainerProps = {
	children: ReactNode;
};

export const AccordionContainer = ({ children }: AccordionContainerProps) => {
	return (
		<Accordion.Root type="single" collapsible>
			{children}
		</Accordion.Root>
	);
};
