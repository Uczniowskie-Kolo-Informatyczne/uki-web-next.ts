'use client';

import { ArrowRight } from '@/components/icons/ArrowRight';
import clsx from 'clsx';
import { useSlideNextButton } from './useSlideNextButton';

export const SlideNextButton = () => {
	const { isActive, slideNext } = useSlideNextButton();

	return (
		<button
			type="button"
			onClick={slideNext}
			className={clsx('px-4', !isActive && 'hidden')}
		>
			<span className="sr-only">Slide to the next slide</span>

			<ArrowRight />
		</button>
	);
};
