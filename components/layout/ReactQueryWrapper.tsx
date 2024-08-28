"use client";

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ReactNode } from 'react';
import { getQueryClient } from '../../lib/getQueryClient';

export default function ReactQueryWrapper({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
