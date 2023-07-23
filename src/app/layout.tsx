import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Roboto_Flex } from 'next/font/google';
import { Nav } from '@/components/inc/nav/Nav';
import { Footer } from '@/components/inc/footer/Footer';
import { getMetadataTitle } from '@/utils/getMetadataTitle';
import { Providers } from '@/components/inc/Providers';

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	style: 'normal',
});

export const metadata = {
	title: getMetadataTitle('UKI'),
};

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl" className={robotoFlex.className}>
			<body className="bg-theme-base text-primary-light">
				<Nav />

				<Providers>{children}</Providers>

				<Footer />
			</body>
		</html>
	);
}
