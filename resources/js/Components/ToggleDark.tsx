import { useState, useEffect } from "react";
import Sun from "./Icons/Sun";
import Moon from "./Icons/Moon";

function ToggelDark() {
    const [darkMode, setDarkMode] = useState(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        return isDark;
    });

    useEffect(() => {
        const className = darkMode ? "dark" : "light";
        document.documentElement.classList.remove(
            className === "light" ? "dark" : "light"
        );
        document.documentElement.classList.add(className);
        localStorage.setItem("theme", className);
    }, [darkMode]);

    return (
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="self-center text-gray-500 dark:text-gray-400">
                <label htmlFor="toggle" className="sr-only">
                    Toggle Dark Mode
                </label>
                <input
                    id="toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />

                {darkMode ? (
                    <Sun className="w-6 h-6" />
                ) : (
                    <Moon className="w-6 h-6" />
                )}
            </div>
        </label>
    );
}

export default ToggelDark;
