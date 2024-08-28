"use client";

import React, { useState } from 'react';
import OrderList from '../../../components/orders/OrderList';
import Tabs from "@/components/layout/Tabs";

const Order: React.FC = () => {
    const [activeTab, setActiveTab] = useState('transaction');

    const tabs = [
        { id: 'transaction', label: 'معاملات' },
        { id: 'buy', label: 'خرید' },
        { id: 'sell', label: 'فروش' }
    ];
    return (
        <div className="w-full flex flex-col justify-center items-center p-4">
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={(id) => {
                    setActiveTab(id);
                }}
            />
            <OrderList type={activeTab} />
        </div>
    );
};

export default Order;
