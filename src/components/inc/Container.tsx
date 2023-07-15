import clsx from 'clsx';
import type { ReactNode } from 'react';

type ContainerType = {
	size: 'md' | 'lg';
	children: ReactNode;
};
export const Container = ({ size, children }: ContainerType) => {
	return (
		<div
			className={clsx('mx-auto w-full px-5 md:px-10', {
				'max-w-8xl': size === 'lg',
				'max-w-4xl': size === 'md',
			})}
		>
			{children}
		</div>
	);
};
