import Link from 'next/link';
import { NavItem } from './NavItem';
import links from './links.json';
import { MobileNav } from './mobileNav/MobileNav';
import { Container } from '../Container';
import Image from 'next/image';

export const Nav = () => {
	return (
		<nav aria-label="Main navigation">
			<Container size="lg">
				<div className="mx-auto py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
					<div className="relative flex items-center justify-between">
						<div className="flex items-center">
							<Link
								href="/"
								className="flex items-center gap-2 rounded-md py-1 outline-offset-0 md:outline-offset-8"
							>
								<Image
									src="/logo412white.png"
									width="50"
									height="50"
									alt=""
								/>

								<h1 className="relative top-0.5 font-bold tracking-wide">
									Uczniowskie Koło Informatyczne
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
