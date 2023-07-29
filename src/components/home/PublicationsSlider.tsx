'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { formatTimestamp } from '@/utils/formatTimestamp';
import { truncate } from '@/utils/truncate';
import { Button } from '../inc/Button';
import { SliderContainer } from '../inc/slider/SliderContainer';
import { SwiperSlide } from 'swiper/react';
import type { Publication } from '@/utils/schemas/publicationsSchema';

type PublicationsSliderProps = {
	publications: Publication[];
};

export const PublicationsSlider = ({
	publications,
}: PublicationsSliderProps) => {
	return (
		<SliderContainer
			labelledBy="publications-section-title"
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			}}
		>
			{publications.map(
				({ _id, description, image, timestamp, title }) => (
					<SwiperSlide
						key={_id}
						role="group"
						aria-roledescription="slide"
						aria-labelledby={`publications-slide-title-${_id}`}
					>
						<article className="mx-auto w-full max-w-md rounded-lg bg-theme-dark shadow-md">
							<div className="relative h-80 w-full">
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
										<h4
											id={`publications-slide-title-${_id}`}
											className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium"
										>
											{title}
										</h4>

										<p className="text-sm text-gray-400">
											{formatTimestamp(timestamp)}
										</p>
									</hgroup>
								</header>

								<div>
									<span className="text-justify">
										{truncate(description, 155)}
									</span>
								</div>
							</div>

							<footer className="flex w-full justify-end pb-5 pr-5">
								<div>
									<Button
										label="Czytaj dalej"
										variant="blue"
										size="base"
									>
										Czytaj dalej
									</Button>
								</div>
							</footer>
						</article>
					</SwiperSlide>
				)
			)}
		</SliderContainer>
	);
};
