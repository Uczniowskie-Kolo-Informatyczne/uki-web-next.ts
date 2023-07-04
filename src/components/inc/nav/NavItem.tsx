import Link from 'next/link';

type NavItemProps = {
	link: string;
	label: string;
	onClick?: () => void;
};

export const NavItem = ({ link, label, onClick = undefined }: NavItemProps) => {
	return (
		<Link
			href={link}
			className="rounded-md border-primary-light px-2 py-2.5 text-xl font-medium tracking-wide text-primary-light transition-colors duration-300 focus-visible:outline-offset-4 lg:border-[1px] lg:px-5 lg:text-sm lg:hover:bg-primary-light lg:hover:text-theme-base"
			onClick={onClick}
		>
			{label}
		</Link>
	);
};
