import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import logo1 from "../assets/Verma Creations white.png";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex mobile:h-auto bg-gray-950 pt-5 justify-around lg:h-96 lg:flex-row mobile:flex-col tab:flex-col tab:pl-8">
                <div className="mobile:ml-8 mt-3">
                    <img src={logo1} alt="logo" className="cursor-pointer moblie:w-8 mobile:h-8 mb-2 lg:h-16 lg:w-18 tab:h-16 tab:w-20" />
                    <p className="flex text-slate-50 mobile:text-xs py-1 tab:text-xl">
                        ©Copyrights 2024 Verma Creations
                    </p>
                    <span className="flex text-slate-50 mobile:text-xs tab:text-xl">
                        All rights reserved
                    </span>
                </div>
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50 my-5 tab:text-2xl">USEFUL LINKS</h2>
                    <div>
                        <ul className="flex flex-col tab:text-2xl">
                            <Link to="/" className="text-gray-500 hover:text-slate-200">Home</Link>
                            <Link to="/services" className="text-gray-500 hover:text-slate-200 tab:py-2">Services</Link>
                            <Link to="/gallery" className="text-gray-500 hover:text-slate-200">Gallery</Link>
                            <Link to="/about" className="text-gray-500 hover:text-slate-200 tab:py-2">About</Link>
                            <a href="#contact" className="text-gray-500 hover:text-slate-200">Contact Us</a>
                        </ul>
                    </div>
                </div>
                <div className="mobile:ml-8 tab:my-6">
                    <h2 className="text-slate-50 my-4 tab:text-2xl">LEGAL</h2>
                    <div>
                        <ul className="tab:text-2xl">
                            <p className="text-gray-500 hover:text-slate-200">Terms and Conditions</p>
                            <p className="text-gray-500 hover:text-slate-200 tab:py-2">Privacy Policy</p>
                            <p className="text-gray-500 hover:text-slate-200">Terms of Sales</p>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="mobile:ml-8">
                        <h2 className="text-slate-50 mb-4 mobile:mt-8 tab:text-2xl">SUBSCRIBE</h2>
                        <div className="flex items-center h-10 border-slate-100 border-b-2 mr-3 justify-between">
                            <div className="flex justify-between items-center mobile:w-64 tab:h-8 tab:w-96">
                                <MdOutlineMailOutline className="text-gray-300 mr-2 tab:text-2xl" />
                                <input type="text" placeholder="Email" className="my-5 border-none bg-transparent outline-none text-slate-100 w-full tab:text-2xl tab:py-2" />
                            </div>
                            <GrSend className="text-pink-500 flex mr-9 cursor-pointer tab:text-2xl" />
                        </div>
                    </div>
                    <div className="flex text-slate-50 items-center mobile:ml-8 my-8 tab:text-2xl">
                        <IoLogoInstagram className="hover:text-red-500 cursor-pointer" />
                        <FaXTwitter className="mobile:mx-3 cursor-pointer tab:mx-4" />
                        <FaFacebookF className="hover:text-blue-700 cursor-pointer tab:mr-4" />
                        <MdLocationPin className="mobile:ml-3 hover:text-red-800 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-20 text-slate-50 mobile:text-xs bg-gray-900 tab:text-xl">
                © 2024, VERMA CREATIONS All rights reserved
            </div>
        </footer>
    )
};

export default Footer;