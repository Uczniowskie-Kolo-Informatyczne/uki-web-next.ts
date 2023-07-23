'use client';

import * as Accordion from '@radix-ui/react-accordion';
import type { ReactNode } from 'react';

type AccordionContentProps = {
	children: ReactNode;
};

export const AccordionContent = ({ children }: AccordionContentProps) => {
	return <Accordion.Content>{children}</Accordion.Content>;
};
