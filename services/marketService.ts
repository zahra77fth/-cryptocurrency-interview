import { fetchMarkets } from '../api/marketApi';
import { ApiResponse } from '../types/api';

export const getMarkets = async (): Promise<ApiResponse> => {
    try {
        return await fetchMarkets();
    } catch (error) {
        throw new Error(`Market service error: ${(error as Error).message}`);
    }
};
