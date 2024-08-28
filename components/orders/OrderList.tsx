import React from 'react';
import { useParams } from 'next/navigation';
import { OrderType, Order, Transaction } from '../../types/api';
import moment from "moment/moment";
import { useOrderData } from '../../hooks/useOrderData';
import { useOrderCalculations } from '../../hooks/orderCalculations';
import { numberFormatter } from '../../utils/formatters';
import Error from "@/app/error";
import Loading from "@/app/loading";
import Table from "@/components/layout/Table";
import OrderCalculationsDisplay from './OrderCalculationsDisplay'

const OrderList: React.FC<OrderType> = ({ type }) => {
    const { id: marketId } = useParams<{ id: string }>();
    const { data, isLoading, isError } = useOrderData(marketId, type);
    const { averagePrice, totalRemains, orderValue, availableRemain, calculateOrder } = useOrderCalculations(data);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    const orderColumns = [
        { header: 'Price', accessor: (row: OrderType) => numberFormatter(parseFloat(row.price)) },
        { header: 'Quantity', accessor: (row: OrderType) => numberFormatter(parseFloat(row.value)) },
        { header: 'Total', accessor: (row: OrderType) => numberFormatter(parseFloat(row.remain)) },
    ];

    const transactionColumns = [
        { header: 'Amount', accessor: (row: Transaction) => numberFormatter(parseFloat(row.match_amount)) },
        { header: 'Price', accessor: (row: Transaction) => numberFormatter(parseFloat(row.price)) },
        { header: 'Time', accessor: (row: Transaction) => moment(row.time).format('hh:mm') },
    ];

    const orders = data?.orders?.slice(0, 10) || [];
    const transactions = type === 'transaction' ? data?.slice(0, 10) || [] : [];

    return (
        <div className="mt-4 flex flex-col justify-center mx-auto">
            {orders.length > 0 || transactions.length > 0 ? (
                type === 'transaction' ? (
                    <Table<Transaction> data={transactions} columns={transactionColumns} />
                ) : (
                    <Table<OrderType> data={orders} columns={orderColumns} />
                )
            ) : (
                <div>No orders available</div>
            )}
            {type !== 'transaction' && (
                <OrderCalculationsDisplay
                    averagePrice={averagePrice}
                    orderValue={orderValue}
                    availableRemain={availableRemain}
                    calculateOrder={calculateOrder}
                />
            )}
        </div>
    );
};

export default OrderList;
