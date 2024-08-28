import { useQuery } from 'react-query';
import { fetchOrders } from '../api/orderApi';
import { OrderApiResponse } from '../types/api';

export const useOrders = (marketId: string, orderType?: string) => {
    return useQuery<OrderApiResponse, Error>(
        ['orders', marketId, orderType],
        () => fetchOrders(marketId, orderType),
        {
            // Polling interval in milliseconds
            refetchInterval: 3000, // 3 seconds
            refetchOnWindowFocus: true, // Optionally refetch on window focus
        }
    );
};
