"use client";

import { useDarkMode } from '../../hooks/useDarkMode';

const Header: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();

    return (
        <header className="p-4 flex justify-between items-center bg-[var(--bg-color)]">
            <h1 className="text-xl font-bold text-[var(--text-color)]">My App</h1>
            <button
                onClick={toggleDarkMode}
                className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--text-color)]"
            >
                Toggle Mode
            </button>
        </header>
    );
};

export default Header;
