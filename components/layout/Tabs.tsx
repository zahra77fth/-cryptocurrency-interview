import React, { useState } from 'react';

type Tab = {
    id: string;
    label: string;
};

type TabsProps = {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (id: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
    const [startTouchX, setStartTouchX] = useState<number | null>(null);
    const [endTouchX, setEndTouchX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartTouchX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setEndTouchX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startTouchX !== null && endTouchX !== null) {
            const diffX = startTouchX - endTouchX;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swiped left
                    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                    const nextIndex = Math.min(currentIndex + 1, tabs.length - 1);
                    onTabChange(tabs[nextIndex].id);
                } else {
                    // Swiped right
                    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                    const prevIndex = Math.max(currentIndex - 1, 0);
                    onTabChange(tabs[prevIndex].id);
                }
            }

            setStartTouchX(null);
            setEndTouchX(null);
        }
    };

    return (
        <div
            className="flex md:min-w-[800px] border-b border-gray-500"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 ${
                        activeTab === tab.id ? 'border-[--primary-text] text-[--primary-text]' : 'border-transparent text-gray-500'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
