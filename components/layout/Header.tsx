"use client";

import { useDarkMode } from '../../hooks/useDarkMode';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Header: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className="p-4 flex justify-between items-center bg-[var(--bg-color)]">
            <h1 className="text-xl font-bold text-[var(--text-color)]">BitPin Test</h1>
            <button
                onClick={toggleDarkMode}
                className="px-4 py-2"
            >
                {isDarkMode ? (
                    <MoonIcon className="h-6 w-6 text-[text-color]" />
                ) : (
                    <SunIcon className="h-6 w-6 text-[text-color]" />
                )}
            </button>
        </header>
    );
};

export default Header;
