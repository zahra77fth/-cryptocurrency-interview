import { useQuery } from 'react-query';
import { fetchOrders } from '../api/orderApi';
import { OrderApiResponse } from '../types/api';

export const useOrders = (marketId: string, orderType?: string) => {
    return useQuery<OrderApiResponse, Error>(
        ['orders', marketId, orderType],
        () => fetchOrders(marketId, orderType),
        {
            refetchInterval: 3000,
            refetchOnWindowFocus: true,
        }
    );
};
