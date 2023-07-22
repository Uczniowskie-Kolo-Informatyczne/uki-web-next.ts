import { Container } from '@/components/inc/Container';
import { SectionContainer } from '@/components/inc/SectionContainer';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { partners } from '@/data/partners';
import Image from 'next/image';
import Link from 'next/link';

export default async function Partners() {
	return (
		<Container size="lg">
			<SectionContainer>
				<SectionTitle tag="h2">Partnerzy</SectionTitle>

				<div>
					<ul
						role="list"
						className="mx-auto grid w-fit grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					>
						{partners.map(({ id, image, link, name }) => (
							<li key={id}>
								<article className="flex min-h-[400px] w-[280px] flex-col justify-between rounded-lg bg-black/20 p-6 text-center">
									<header>
										<div className="relative h-36 w-[232px]">
											<Image
												src={image}
												alt=""
												fill
												className="object-cover"
											/>
										</div>

										<div className="my-5 h-0.5 w-full bg-gray-800"></div>

										<h3 className="font-medium">{name}</h3>
									</header>

									{link && (
										<footer>
											<Link
												href={link}
												className="text-lg hover:underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												Odwiedź stronę
											</Link>
										</footer>
									)}
								</article>
							</li>
						))}
					</ul>
				</div>
			</SectionContainer>
		</Container>
	);
}
