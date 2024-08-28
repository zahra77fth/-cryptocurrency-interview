import { QueryClient } from 'react-query';

let queryClient: QueryClient | null = null;

export const getQueryClient = (): QueryClient => {
    if (!queryClient) {
        queryClient = new QueryClient();
    }
    return queryClient;
};
