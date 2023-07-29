'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { SlidePrevButton } from './slidePrevButton/SlidePrevButton';
import { SlideNextButton } from './slideNextButton/SlideNextButton';

type SliderContainerProps = {
	breakpoints: {
		[width: number]: SwiperOptions;
		[ratio: string]: SwiperOptions;
	};
	children: ReactNode;
};

export const SliderContainer = ({
	breakpoints,
	children,
}: SliderContainerProps) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			tag="section"
			navigation={{
				prevEl: 'swiper-prev',
				nextEl: 'swiper-next',
			}}
			modules={[A11y, Keyboard, Autoplay, Navigation]}
			breakpoints={breakpoints}
		>
			{children}

			<div className="swiper-prev">
				<SlidePrevButton />
			</div>

			<div className="swiper-next">
				<SlideNextButton />
			</div>
		</Swiper>
	);
};
