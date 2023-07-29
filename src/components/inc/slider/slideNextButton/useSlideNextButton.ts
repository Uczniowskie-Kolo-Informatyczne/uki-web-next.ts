import { useEffect, useState } from 'react';
import type Swiper from 'swiper';
import { useSwiper } from 'swiper/react';

export const useSlideNextButton = () => {
	const swiper = useSwiper();
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		swiper.on('slideChange', (_swiper: Swiper) => {
			if (_swiper.isEnd) {
				setIsActive(false);
			} else if (isActive) {
				setIsActive(true);
			}
		});
	}, [swiper]);

	const slideNext = () => {
		swiper.slideNext();
	};

	return {
		isActive,
		slideNext,
	};
};
