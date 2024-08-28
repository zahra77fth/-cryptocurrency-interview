import axiosInstance from './axiosInstance';
import { V1_ORDER_URL, V2_ORDER_URL } from './endpoints';
import { OrderApiResponse } from '../types/api';

export const fetchOrders = async (marketId: string, orderType?: string): Promise<OrderApiResponse> => {
    const url = orderType === 'transaction'
        ? `${V1_ORDER_URL}${marketId}/`
        : `${V2_ORDER_URL}${marketId}/?type=${orderType}`;

    try {
        const response = await axiosInstance.get<OrderApiResponse>(url);
        return response.data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        throw new Error(`Failed to fetch orders: ${errorMessage}`);
    }
};
