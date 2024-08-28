import React from 'react';

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
    return (
        <div className="flex md:min-w-[800px] border-b border-gray-500">
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
