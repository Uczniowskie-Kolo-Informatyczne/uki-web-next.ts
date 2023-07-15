import Link from 'next/link';
import { linksSections } from './linksSections';
import { socialMedia } from './socialMedia';
import { NEXT_PUBLIC_APP_NAME } from '@/utils/env';
import { Container } from '../Container';

export const Footer = () => {
	return (
		<footer className="relative mt-64 bg-black/20">
			<svg
				className="absolute -top-6 h-6 w-full text-black opacity-20 sm:-top-16 sm:h-16"
				preserveAspectRatio="none"
				viewBox="0 0 1440 54"
			>
				<path
					fill="currentColor"
					d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
				/>
			</svg>

			<Container size="lg">
				<div className="mx-auto w-full pt-12 sm:max-w-xl md:max-w-full lg:max-w-none lg:px-0">
					<div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
						<div className="md:max-w-md lg:col-span-2">
							<Link
								href="/"
								className="rounded-md text-xl font-bold uppercase tracking-wide text-primary-light outline-offset-8"
							>
								{NEXT_PUBLIC_APP_NAME}
							</Link>

							<div className="mt-4 lg:max-w-sm">
								<p className="text-sm">
									Sed ut perspiciatis unde omnis iste natus
									error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam.
								</p>
								<p className="mt-4 text-sm">
									Eaque ipsa quae ab illo inventore veritatis
									et quasi architecto beatae vitae dicta sunt
									explicabo.
								</p>
							</div>
						</div>

						<div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
							<div className="hidden lg:block"></div>

							{linksSections.map(({ title, links }, i) => (
								<div key={i}>
									<p className="font-semibold tracking-wide">
										{title}
									</p>

									<ul role="list" className="mt-2 space-y-2">
										{links.map(({ title, link }, _i) => (
											<li key={_i}>
												<Link
													href={link}
													className="rounded-sm outline-offset-8 transition-colors hover:text-primary-light/80"
												>
													{title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col justify-between border-t pb-10 pt-5 sm:flex-row">
						<p className="text-sm text-primary-light">
							© Copyright {new Date().getFullYear()}{' '}
							{NEXT_PUBLIC_APP_NAME}. Wszelkie prawa zastrzeżone.
						</p>

						<div className="mt-4 flex items-center space-x-4 sm:mt-0">
							{socialMedia.map(({ icon, link, name }, i) => (
								<Link
									key={i}
									href={link}
									title={name}
									className="rounded-sm outline-offset-4 transition-opacity hover:opacity-80"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="sr-only">{name}</span>
									{icon()}
								</Link>
							))}
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
