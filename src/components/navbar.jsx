import React, {useState, useEffect} from 'react';
import Button from './button';
import { IoMenuOutline } from 'react-icons/io5';
import { FaMoon, FaSun } from 'react-icons/fa';

const navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);
    return (
        <div className='flex flex-row items-center justify-between w-full p-2 bg-lightBorder dark:bg-darkBorder'>

            <div className='flex flex-row items-center gap-4'>
                <IoMenuOutline size={30} className='lg:hidden'/>
                <span className='font-extrabold'>ForeTime</span>
                <nav className='lg:flex hidden'>
                    <ul className='flex flex-row items-center'>
                        <li className='mx-2'><a href='#'>Home</a></li>
                        <li className='mx-2'><a href='#'>About</a></li>
                    </ul>
                </nav>
            </div>

            
            <div className='flex flex-row gap-4'>
                <button onClick={toggleDarkMode}>{isDarkMode ? <FaMoon/> : <FaSun/>}</button>
                <Button variant='primary' rounded='full' text='Sign In' />
            </div>

        </div>
    )
}

export default navbar;
