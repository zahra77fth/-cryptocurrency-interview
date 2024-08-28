import { useOrders } from './useOrders';

export const useOrderData = (marketId: string, type: string) => {
    const { data, isLoading, isError } = useOrders(marketId, type);

    return { data, isLoading, isError };
};
