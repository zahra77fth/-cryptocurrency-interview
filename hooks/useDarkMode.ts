import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return { isDarkMode, toggleDarkMode };
};
