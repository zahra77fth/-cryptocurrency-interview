import axiosInstance from './axiosInstance';
import { V1_MARKETS_URL } from './endpoints';
import { ApiResponse } from '../types/api';

export const fetchMarkets = async (): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.get<ApiResponse>(V1_MARKETS_URL);
        return response.data;
    } catch (error) {

        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        throw new Error(`Failed to fetch markets: ${errorMessage}`);
    }
};
