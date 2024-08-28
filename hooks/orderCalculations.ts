import { useState, useEffect } from 'react';
import { Order } from '../types/api';

export const useOrderCalculations = (data: Order[]) => {
    const [averagePrice, setAveragePrice] = useState<number | null>(null);
    const [totalRemains, setTotalRemains] = useState<number | null>(null);
    const [orderValue, setOrderValue] = useState<number | null>(null);
    const [availableRemain, setAvailableRemain] = useState<number | null>(null);

    useEffect(() => {
        if (data.length > 0) {
            const lastOrders = data.slice(0, 10);

            const totalPrices = lastOrders.reduce((sum, order) => sum + parseFloat(order.price || '0'), 0);
            const totalRemains = lastOrders.reduce((sum, order) => sum + parseFloat(order.remain || '0'), 0);

            const avgPrice = lastOrders.length > 0 ? totalPrices / lastOrders.length : 0;
            setAveragePrice(avgPrice);
            setTotalRemains(totalRemains);
        } else {
            setAveragePrice(null);
            setTotalRemains(null);
            setOrderValue(null);
            setAvailableRemain(null);
        }
    }, [data]);

    const calculateOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
        const percent = parseFloat(event.target.value) || 0;
        if (totalRemains !== null && averagePrice !== null && !isNaN(percent)) {
            setOrderValue(averagePrice * (percent * totalRemains / 100));
            setAvailableRemain(percent * totalRemains / 100);
        } else {
            setOrderValue(null);
        }
    };

    return { averagePrice, totalRemains, orderValue, availableRemain, calculateOrder };
};
