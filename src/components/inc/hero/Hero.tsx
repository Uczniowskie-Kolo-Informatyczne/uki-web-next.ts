import Image from 'next/image';
import { Container } from '../Container';
import WhiteLogo from '../../../../public/logo412white.png';
import { NEXT_PUBLIC_APP_NAME } from '@/utils/env';
import { ButtonLink } from '../ButtonLink';

export const Hero = () => {
	return (
		<header className="min-h-screen w-full">
			<Container size="lg">
				<div className="flex flex-col items-center gap-3 pt-48">
					<div className="relative h-36 w-36 md:h-48 md:w-48 lg:h-56 lg:w-56">
						<Image
							src={WhiteLogo}
							fill
							sizes="(min-width: 768px) 12rem, (min-width: 1024px) 14rem"
							priority
							alt=""
						/>
					</div>

					<div className="space-y-10 text-center">
						<hgroup className="space-y-4 text-center">
							<h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
								{NEXT_PUBLIC_APP_NAME}
							</h2>

							<p className="text-sm tracking-wide md:text-base xl:text-lg">
								Społeczność uczniów działających w branży IT, bo
								przyszłość zaczyna się dzisiaj!
							</p>
						</hgroup>

						<div className="mx-auto w-56 md:w-72">
							<ButtonLink
								href="https://discord.gg/phcnjDjh9E"
								target="_blank"
								variant="white"
								size="lg"
							>
								Dołącz teraz
							</ButtonLink>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
};
