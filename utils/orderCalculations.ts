import { Order } from '../types/api';

export const calculateOrderData = (orders: Order[]) => {
    if (orders.length === 0) {
        return {
            averagePrice: null,
            totalRemains: null,
            orderValue: null,
            availableRemain: null,
        };
    }

    const lastOrders = orders.slice(0, 10);

    const totalPrices = lastOrders.reduce((sum, order) => sum + parseFloat(order.price || '0'), 0);
    const totalRemains = lastOrders.reduce((sum, order) => sum + parseFloat(order.remain || '0'), 0);

    const avgPrice = lastOrders.length > 0 ? totalPrices / lastOrders.length : 0;

    return {
        averagePrice: avgPrice,
        totalRemains,
        orderValue: null,
        availableRemain: null,
    };
};

export const calculateOrderValue = (
    totalRemains: number | null,
    averagePrice: number | null,
    percent: number
) => {
    if (totalRemains !== null && averagePrice !== null && !isNaN(percent)) {
        const orderValue = averagePrice * (percent * totalRemains / 100);
        const availableRemain = percent * totalRemains / 100;
        return { orderValue, availableRemain };
    }
    return { orderValue: null, availableRemain: null };
};
