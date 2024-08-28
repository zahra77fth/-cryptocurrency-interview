import React from 'react';
import { numberFormatter } from '../../utils/formatters';
import Input from "@/components/layout/Input";

interface OrderCalculationsDisplayProps {
    averagePrice: number | null;
    orderValue: number | null;
    availableRemain: number | null;
    calculateOrder: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OrderCalculationsDisplay: React.FC<OrderCalculationsDisplayProps> = ({
                                                                               averagePrice,
                                                                               orderValue,
                                                                               availableRemain,
                                                                               calculateOrder
                                                                           }) => (
    <div className="flex flex-col justify-center items-center bg-[--bg-color] p-6 rounded-lg w-full min-w-[680px] mt-6">
        <div className="w-full mx-2">
            <Input label="Quantity" onChange={calculateOrder} />
        </div>
        <div className="flex justify-between w-full">
            <p className="text-lg text-[--text-color] text-nowrap">
                Price for entered percentage amount:
            </p>
            <span className="font-semibold text-[--text-primary]">
                {orderValue !== null ? numberFormatter(orderValue) : '0'}
            </span>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-lg text-[--text-color] text-nowrap">
                Average Price:
            </p>
            <span className="font-semibold text-[--text-primary]">
                {averagePrice !== null ? numberFormatter(averagePrice) : '0'}
            </span>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-lg text-[--text-color] text-nowrap">
                Total Receivable Quantity:
            </p>
            <span className="font-semibold text-[--text-primary]">
                {availableRemain !== null ? numberFormatter(availableRemain) : '0'}
            </span>
        </div>
    </div>
);

export default OrderCalculationsDisplay;
