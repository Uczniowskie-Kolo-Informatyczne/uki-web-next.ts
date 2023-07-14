'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

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
			slidesPerView={1}
			tag="ol"
			navigation={true}
			modules={[A11y, Keyboard, Autoplay, Navigation]}
			breakpoints={breakpoints}
		>
			{children}
		</Swiper>
	);
};
