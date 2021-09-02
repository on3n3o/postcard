import React, { useState } from "react";


const ChangeTheme = () => {

    const [theme, setTheme] = useState(localStorage.theme);

    const handleClick = () => {
        if (localStorage.theme == "light") {
            localStorage.theme = "dark";
            setTheme('dark');
        } else {
            localStorage.theme = "light";
            setTheme('light');
        }
    
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <div onClick={handleClick} className="pr-10">
            { theme == 'dark' && <i className="text-gray-600 fas fa-lg fa-moon pr-2" />}
            { theme == 'light' && <i className="text-yellow-300 fas fa-lg fa-circle pr-2" />}
            { theme == 'dark' && <i className="text-gray-600 fas fa-lg fa-toggle-off" />}
            { theme == 'light' && <i className="text-gray-600 fas fa-lg fa-toggle-on" />}
        </div>
    );
}

export default ChangeTheme;
