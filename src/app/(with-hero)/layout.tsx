import { Hero } from '@/components/inc/hero/Hero';
import type { ReactNode } from 'react';

type WithHeroLayoutProps = {
	children: ReactNode;
};

export default function WithHeroLayout({ children }: WithHeroLayoutProps) {
	return (
		<>
			<Hero />

			<div className="absolute left-0 top-0 -z-10  h-screen w-full bg-black opacity-20"></div>

			<main>{children}</main>
		</>
	);
}
