import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="bg-black text-gray-400 h-[100px] max-w-[1300px] mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold primary-color ml-4">
                David Borrero
            </h1>

            <ul className="hidden md:flex">
                <li className="p-5">
                    <a href="#home">Home</a>
                </li>
                <li className="p-5">
                    <a href="#about">About</a>
                </li>
                <li className="p-5">
                    <a href="#projects">Projects</a>
                </li>
                <li className="p-5">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden mr-6">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>

            <div className={nav ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"}> 
                <h1 className="text-3xl primary-color ml-6 mt-6">
                    David Borrero
                </h1>

                <ul className="p-8 text-2xl">
                    <li className="p-2">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-2">
                        <a href="#about">About</a>
                    </li>
                    <li className="p-2">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="p-2">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar
