'use client';

import type { ReactNode } from 'react';
import { SwiperSlide } from 'swiper/react';

type SliderSlideProps = {
	labelledBy: string;
	children: ReactNode;
};

export const SliderSlide = ({ labelledBy, children }: SliderSlideProps) => {
	return (
		<SwiperSlide
			role="group"
			aria-roledescription="slide"
			aria-labelledby={labelledBy}
		>
			{children}
		</SwiperSlide>
	);
};

// https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
SliderSlide.displayName = 'SwiperSlide';
