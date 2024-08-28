import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { OrderType, Order, Transaction } from '../../types/api';
import { useOrderData } from '../../hooks/useOrderData';
import { calculateOrderData, calculateOrderValue } from '../../utils/orderCalculations';
import { numberFormatter } from '../../utils/formatters';
import Error from "@/app/error";
import moment from 'jalali-moment';
import Loading from "@/app/loading";
import Table from "@/components/layout/Table";
import OrderCalculationsDisplay from "@/components/orders/OrderCalculationsDisplay";

const OrderList: React.FC<OrderType> = ({ type }) => {
    const { id: marketId } = useParams<{ id: string }>();
    const { data, isLoading, isError } = useOrderData(marketId, type);

    let orders: Order[] = [];
    let transactions: Transaction[] = [];

    if (type === 'transaction' && Array.isArray(data)) {
        transactions = data.slice(0, 10) as Transaction[];
    } else if (type !== 'transaction' && data && 'orders' in data) {
        orders = (data.orders as Order[]).slice(0, 10);
    }

    const { averagePrice, totalRemains, orderValue, availableRemain } = calculateOrderData(orders);

    const [calculatedOrderValue, setCalculatedOrderValue] = useState<number | null>(orderValue);
    const [calculatedAvailableRemain, setCalculatedAvailableRemain] = useState<number | null>(availableRemain);

    const handleCalculateOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
        const percent = parseFloat(event.target.value) || 0;
        const { orderValue, availableRemain } = calculateOrderValue(totalRemains, averagePrice, percent);
        setCalculatedOrderValue(orderValue);
        setCalculatedAvailableRemain(availableRemain);
    };

    if (isLoading) return <Loading />;
    if (isError || !data) return <Error />;

    const orderColumns = [
        { header: 'قیمت', accessor: (row: Order) => numberFormatter(parseFloat(row.price)) },
        { header: 'مقدار', accessor: (row: Order) => numberFormatter(parseFloat(row.value)) },
        { header: 'حجم', accessor: (row: Order) => numberFormatter(parseFloat(row.remain)) },
    ];

    const transactionColumns = [
        { header: 'مقدار', accessor: (row: Transaction) => numberFormatter(parseFloat(row.match_amount)) },
        { header: 'قیمت', accessor: (row: Transaction) => numberFormatter(parseFloat(row.price)) },
        { header: 'زمان', accessor: (row: Transaction) => moment(row.time).format('hh:mm') },
    ];

    const displayOrders = orders.slice(0, 10);
    const displayTransactions = transactions.slice(0, 10);

    return (
        <div className="mt-4 flex flex-col justify-center mx-auto">
            {displayOrders.length > 0 || displayTransactions.length > 0 ? (
                type === 'transaction' ? (
                    <Table<Transaction> data={displayTransactions} columns={transactionColumns} />
                ) : (
                    <Table<Order> data={displayOrders} columns={orderColumns} />
                )
            ) : (
                <div>No orders available</div>
            )}
            {type !== 'transaction' && (
                <OrderCalculationsDisplay
                    averagePrice={averagePrice}
                    orderValue={calculatedOrderValue}
                    availableRemain={calculatedAvailableRemain}
                    calculateOrder={handleCalculateOrder}
                />
            )}
        </div>
    );
};

export default OrderList;
