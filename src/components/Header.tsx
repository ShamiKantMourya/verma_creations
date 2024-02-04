// import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import { useState } from "react";
import logo1 from "../assets/Verma Creations white.png";

const Header = () => {
    const [click, setClick] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);

    const changeNavbarColor = () => {
        
        if (window.scrollY >= 80) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    };

    window.addEventListener('scroll', changeNavbarColor);
    const navBar = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <h1 className="text-black my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</h1>
                <h1 className="text-black">Services</h1>
                <h1 className="text-black">Gallery</h1>
                <h1 className="text-black">About</h1>
            </ul>
        </div>
    </>
    return (
        <nav className={navbarColor ? "bg-blue-600 h-20 fixed w-full" : "bg-red-500 h-20 fixed w-full"}>
            <div className="h-10vh flex lg:justify-between z-50 text-white py-5 lg:px-20 mobile:ml-8">
                <div className="flex items-center flex-1">
                    <img src={logo1} alt="logo" className="lg:w-16 cursor-pointer moblie:w-8 mobile:h-8" />
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <h1 className="text-black">Home</h1>
                            <h1 className="text-black">Services</h1>
                            <h1 className="text-black">Gallery</h1>
                            <h1 className="text-black">About</h1>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex md:flex hidden border border-white px-4 py-1">
                    <p className="flex justify-center items-center">CONTACT US</p>
                </div>
                <div>
                    {click && navBar}
                </div>
                <button className="block sm:hidden transition mobile:mr-8" onClick={() => setClick(!click)}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>

        </nav>
    )
}

export default Header;