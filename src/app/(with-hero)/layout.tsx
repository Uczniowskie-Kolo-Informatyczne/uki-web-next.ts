import { Particles } from '@/components/inc/Particles';
import { Hero } from '@/components/inc/hero/Hero';
import type { ReactNode } from 'react';

type WithHeroLayoutProps = {
	children: ReactNode;
};

export default function WithHeroLayout({ children }: WithHeroLayoutProps) {
	return (
		<>
			<Hero />

			<div className="fixed left-0 top-0 -z-10 h-screen w-screen">
				<Particles />
			</div>

			<div className="absolute left-0 top-0 -z-10 h-screen w-full border-b-4 border-accent-light bg-black/20"></div>

			<main>{children}</main>
		</>
	);
}
