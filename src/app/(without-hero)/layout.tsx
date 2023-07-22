import type { ReactNode } from 'react';

type WithoutHeroLayoutProps = {
	children: ReactNode;
};

export default function WithoutHeroLayout({
	children,
}: WithoutHeroLayoutProps) {
	return <main className="mt-32">{children}</main>;
}
