'use client';

import { NavItem } from '../NavItem';
import { useMobileNav } from './useMobileNav';
import links from '../links.json';
import { Bars } from '../../../icons/Bars';
import { Times } from '../../../icons/Times';
import clsx from 'clsx';

export const MobileNav = () => {
	const { navButtonRef, isNavActive, toggleNav, closeNav } = useMobileNav();

	return (
		<div className="lg:hidden">
			<button
				ref={navButtonRef}
				aria-label={
					isNavActive ? 'Close navigation' : 'Open navigation'
				}
				aria-expanded={isNavActive}
				aria-controls="mobile-navigation"
				className="relative z-50 rounded-md p-2"
				onClick={toggleNav}
			>
				{isNavActive ? <Times /> : <Bars />}
			</button>

			<div
				id="mobile-navigation"
				className={clsx({
					'invisible hidden': !isNavActive,
				})}
			>
				<div className="absolute left-0 top-20 z-40 w-full">
					<div className="rounded bg-theme-base px-5 py-7 shadow-md">
						<ul role="list" className="w-full space-y-5">
							{links.map(({ link, label }, key) => (
								<li key={key}>
									<NavItem
										link={link}
										label={label}
										onClick={closeNav}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div
					className="fixed left-0 top-0 z-30 h-screen w-screen bg-black/30"
					onClick={closeNav}
				></div>
			</div>
		</div>
	);
};
