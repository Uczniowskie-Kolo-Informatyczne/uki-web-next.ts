import Link from 'next/link';
import { NavItem } from './NavItem';
import links from './links.json';
import { MobileNav } from './mobileNav/MobileNav';
import { Container } from '../Container';
import Image from 'next/image';
import WhiteLogo from '../../../../public/logo412white.png';
import { NEXT_PUBLIC_APP_NAME } from '@/utils/env';

export const Nav = () => {
	return (
		<nav
			aria-label="Main navigation"
			className="absolute left-0 top-0 w-full"
		>
			<Container size="lg">
				<div className="mx-auto w-full py-5 sm:max-w-xl md:max-w-full lg:max-w-none">
					<div className="relative flex items-center justify-between">
						<div className="flex items-center">
							<Link
								href="/"
								className="flex items-center gap-2 rounded-md py-1 outline-offset-0 md:outline-offset-8"
							>
								<Image
									src={WhiteLogo}
									width="50"
									height="50"
									alt=""
								/>

								<h1 className="relative top-0.5 font-bold tracking-wide">
									{NEXT_PUBLIC_APP_NAME}
								</h1>
							</Link>
						</div>

						<ul
							role="list"
							className="ml-4 hidden items-center space-x-4 lg:flex"
						>
							{links.map(({ link, label }, key) => (
								<li key={key}>
									<NavItem link={link} label={label} />
								</li>
							))}
						</ul>

						<MobileNav />
					</div>
				</div>
			</Container>
		</nav>
	);
};
