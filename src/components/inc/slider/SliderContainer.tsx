'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

type SliderContainerTag = keyof Pick<JSX.IntrinsicElements, 'ul' | 'ol'>;

type SliderContainerProps = {
	breakpoints: {
		[width: number]: SwiperOptions;
		[ratio: string]: SwiperOptions;
	};
	tag: SliderContainerTag;
	children: ReactNode;
};

export const SliderContainer = ({
	breakpoints,
	tag,
	children,
}: SliderContainerProps) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			tag={tag}
			navigation={true}
			modules={[A11y, Keyboard, Autoplay, Navigation]}
			breakpoints={breakpoints}
		>
			{children}
		</Swiper>
	);
};
