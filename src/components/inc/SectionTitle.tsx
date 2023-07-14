import type { ReactNode } from 'react';

type HeadingTag = keyof Pick<
	JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

type SectionTitleProps = {
	tag: HeadingTag;
	children: ReactNode;
};

export const SectionTitle = ({ tag, children }: SectionTitleProps) => {
	const Tag = tag;

	return (
		<div className="mb-20 w-full text-center">
			<Tag className="text-4xl md:text-5xl">{children}</Tag>
		</div>
	);
};
