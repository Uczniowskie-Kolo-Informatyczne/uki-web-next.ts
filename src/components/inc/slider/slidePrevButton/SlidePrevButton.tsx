'use client';

import { ArrowLeft } from '@/components/icons/ArrowLeft';
import clsx from 'clsx';
import { useSlidePrevButton } from './useSlidePrevButton';

export const SlidePrevButton = () => {
	const { isActive, slidePrev } = useSlidePrevButton();

	return (
		<button
			type="button"
			onClick={slidePrev}
			className={clsx('px-4', !isActive && 'hidden')}
		>
			<span className="sr-only">Slide to the previous slide</span>

			<ArrowLeft />
		</button>
	);
};
