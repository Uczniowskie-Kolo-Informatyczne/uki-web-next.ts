import { useEffect, useState } from 'react';
import type Swiper from 'swiper';
import { useSwiper } from 'swiper/react';

export const useSlidePrevButton = () => {
	const swiper = useSwiper();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		swiper.on('slideChange', (_swiper: Swiper) => {
			if (_swiper.isBeginning) {
				setIsActive(false);
			} else if (!isActive) {
				setIsActive(true);
			}
		});
	}, [swiper]);

	const slidePrev = () => {
		swiper.slidePrev();
	};

	return {
		isActive,
		slidePrev,
	};
};
