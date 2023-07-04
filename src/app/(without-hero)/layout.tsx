import type { ReactNode } from 'react';

type WithoutHeroLayoutProps = {
	children: ReactNode;
};

export default function WithoutHeroLayout({
	children,
}: WithoutHeroLayoutProps) {
	return <main>{children}</main>;
}
