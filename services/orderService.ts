// src/services/orderService.ts
import { fetchOrders } from '../api/orderApi';
import { OrderApiResponse } from '../types/api';

export const getOrders = async (marketId: string, orderType?: string): Promise<OrderApiResponse> => {
    try {
        return await fetchOrders(marketId, orderType);
    } catch (error) {
        // Handle service layer errors or rethrow
        throw new Error(`Order service error: ${(error as Error).message}`);
    }
};
