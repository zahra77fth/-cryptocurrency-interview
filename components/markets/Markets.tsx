"use client";

import React, { useState } from 'react';
import styles from './MarketsList.module.css';
import { Data } from "@/types/api";
import Tabs from '../layout/Tabs';
import Button from "@/components/layout/Button";
import Link from "next/link";
import Table from "@/components/layout/Table";
import Image from "next/image";

type TabSwitcherProps = {
    data: Data[];
    tabs?: { id: string; label: string }[];
};

const ITEMS_PER_PAGE = 10;

const tabs = [
    { id: 'IRT', label: 'IRT' },
    { id: 'USDT', label: 'USDT' }
];

const Markets: React.FC<TabSwitcherProps> = ({ data }) => {
    const initialTab = tabs.length > 0 ? tabs[0].id : '';
    const [activeTab, setActiveTab] = useState(initialTab);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredMarkets = data.filter((market) => market.currency2.code === activeTab);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedMarkets = filteredMarkets.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredMarkets.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const columns = [
        { header: 'نام ارز',accessor: (row: Data) => (
                <div className="flex">
                    <div className="w-12 h-12 relative mx-2">
                        <Image
                            src={row.currency1.image}
                            alt={`${row.title} logo`}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                        <p>{row.title_fa}</p>
                        <p className="text-sm text-gray-400">{row.code}</p>
                    </div>
                </div>
            ),
        },
        {header: 'قیمت', accessor: (row: Data) => row.price},
        {
            header: 'خرید / فروش',
            accessor: (row: Data) => (
                <Button size="md" disabled={!row.tradable}>
                    <Link href={`/orders/${row.id}`} passHref>
                        <p className="text-black hover:underline">خرید / فروش</p>
                    </Link>
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={(id) => {
                    setActiveTab(id);
                    setCurrentPage(1);
                }}
            />

            <div className="mt-4">
                <div className={styles.container}>
                    <Table<Data>
                        data={paginatedMarkets}
                        columns={columns}
                    />

                    <div className={styles.paginationControls}>
                        <button
                            className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &#9664; Previous
                        </button>
                        <span className={styles.pageInfo}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next &#9654;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Markets;
