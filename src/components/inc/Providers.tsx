'use client';

import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type ProvidersProps = {
	children: ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};
