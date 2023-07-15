'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import type { Project } from '@/app/(with-hero)/page';
import Image from 'next/image';
import { truncate } from '@/utils/truncate';
import { Button } from '../inc/Button';
import { SliderContainer } from '../inc/slider/SliderContainer';
import { SwiperSlide } from 'swiper/react';
import { NEXT_PUBLIC_APP_ACRONYM } from '@/utils/env';

type ProjectsSliderProps = {
	projects: Project[];
};

export const ProjectsSlider = ({ projects }: ProjectsSliderProps) => {
	return (
		<SliderContainer
			breakpoints={{
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
			}}
		>
			{projects.map(({ id, opis, image, data, sukcesy, uki, title }) => (
				<SwiperSlide tag="li" key={id}>
					<article className="mx-auto w-full max-w-2xl rounded-lg bg-theme-dark shadow-md">
						<div className="relative h-36 w-full sm:h-64 md:h-80">
							<Image
								src={image}
								alt=""
								fill
								className="rounded-t-lg"
							/>
						</div>

						<div className="space-y-5 p-5">
							<header>
								<hgroup className="w-full space-y-0.5 text-left">
									<h4 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
										{title}
									</h4>

									{uki && (
										<p className="mb-10 text-sm text-gray-400">
											[Projekt realizowany pod patronatem{' '}
											{NEXT_PUBLIC_APP_ACRONYM}]
										</p>
									)}
								</hgroup>
							</header>

							<div className="space-y-3">
								<span className="text-justify">
									{truncate(opis, 155)}
								</span>

								<div className="space-y-1">
									<h5 className="font-medium">Sukcesy:</h5>

									<ul
										role="list"
										className="padding list-disc ps-5"
									>
										{sukcesy.map((sukces, i) => (
											<li
												key={i}
												className="text-sm text-gray-300"
											>
												{sukces}
											</li>
										))}
									</ul>
								</div>

								<div>
									<h5>Tworzony od:</h5>
									<span>{data}</span>
								</div>
							</div>
						</div>

						<footer className="flex w-full justify-end pb-5 pr-5">
							<Button
								label="Odwiedź stronę"
								variant="blue"
								size="base"
							>
								Odwiedź stronę
							</Button>
						</footer>
					</article>
				</SwiperSlide>
			))}
		</SliderContainer>
	);
};
