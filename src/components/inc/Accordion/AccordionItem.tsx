'use client';

import type { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

type AccordionItemProps = {
	id: string;
	children: ReactNode;
};

export const AccordionItem = ({ id, children }: AccordionItemProps) => {
	return <Accordion.Item value={id}>{children}</Accordion.Item>;
};
