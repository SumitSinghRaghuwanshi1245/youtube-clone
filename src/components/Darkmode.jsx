import { useState, useEffect } from 'react';
import '../styles/darkmode.css';
import { MdOutlineDarkMode } from "react-icons/md";

import { MdOutlineLightMode } from "react-icons/md";


const Darkmode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch">
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
                <div className="mt-6 ml-[450px] md:ml-[700px] lg:ml-[1700px] slider round">
                    <span className=" slider-icon">
                        {theme === 'dark' ? <MdOutlineDarkMode className='w-8 h-12'  /> : <MdOutlineLightMode className='w-8 h-12' />
                        }
                    </span>
                </div>
            </label>
        </div>
    );
};

export default Darkmode;
