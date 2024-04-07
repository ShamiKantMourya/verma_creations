import React, {useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import logo1 from "../assets/Verma Creations white.png";

const Header: React.FC = () => {
    const [click, setClick] = useState<Boolean>(false);
    const [navbarColor, setNavbarColor] = useState<boolean>(false);
    // const [location, setLocation] = useState("");

    // useEffect(() => {
    //     let latitude;
    //     let longitude;
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         latitude = position.coords.latitude;
    //         longitude = position.coords.longitude;
    //     });
        
    // }, []);

    const changeNavbarColor = () => {

        if (window.scrollY >= 80) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    };

    window.addEventListener('scroll', changeNavbarColor);
    const navBar = <>
        <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20 flex flex-col">
                <Link to="/" className="text-slate-100 my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</Link>
                <Link to="/services" className="text-slate-100 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</Link>
                <Link to="/gallery" className="text-slate-100 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Gallery</Link>
                <Link to="/about" className="text-slate-100 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</Link>
            </ul>
        </div>
    </>
    return (
        <nav className={navbarColor ? "backdrop-blur-sm h-20 fixed w-full z-10" : "transparent h-20 fixed w-full z-10"}>
            <div className="h-10vh flex lg:justify-between z-50 text-white py-5 lg:px-20 mobile:ml-8">
                <div className="flex items-center flex-1">
                    <Link to="/">
                        <img src={logo1} alt="logo" className="lg:w-20 lg:h-12 cursor-pointer moblie:w-8 mobile:h-8 tab:h-16 tab:w-20" />
                    </Link>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] cursor-pointer text-white tab:text-2xl">
                            <Link to="/" className="">Home</Link>
                            <Link to="/services" className="">Services</Link>
                            <Link to="/gallery" className="">Gallery</Link>
                            <Link to="/about" className="">About</Link>
                        </ul>
                    </div>
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