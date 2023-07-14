import type { ReactNode } from 'react';

type SectionContainerProps = {
	children: ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
	return <section className="my-20">{children}</section>;
};
