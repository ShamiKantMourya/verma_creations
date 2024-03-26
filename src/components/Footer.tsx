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
            <div className="flex mobile:h-auto bg-gray-950 pt-5 justify-around lg:h-96 lg:flex-row mobile:flex-col">
                <div className="mobile:ml-8 mt-3">
                    <img src={logo1} alt="logo" className="cursor-pointer moblie:w-8 mobile:h-8 mb-2" />
                    <p className="flex text-slate-50 mobile:text-xs py-1">
                        ©Copyrights 2024 Verma Creations
                    </p>
                    <span className="flex text-slate-50 mobile:text-xs">
                        All rights reserved
                    </span>
                </div>
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50 my-4">USEFUL LINKS</h2>
                    <div>
                        <ul className="flex flex-col">
                            <Link to="/" className="text-gray-500 hover:text-slate-200">Home</Link>
                            <Link to="/services" className="text-gray-500 hover:text-slate-200">Services</Link>
                            <Link to="/gallery" className="text-gray-500 hover:text-slate-200">Gallery</Link>
                            <Link to="/about" className="text-gray-500 hover:text-slate-200">About</Link>
                            <Link to="contact" className="text-gray-500 hover:text-slate-200">Contact Us</Link>
                        </ul>
                    </div>
                </div>
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50 my-4">LEGAL</h2>
                    <div>
                        <ul>
                            <p className="text-gray-500 hover:text-slate-200">Terms and Conditions</p>
                            <p className="text-gray-500 hover:text-slate-200">Privacy Policy</p>
                            <p className="text-gray-500 hover:text-slate-200">Terms of Sales</p>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="mobile:ml-8">
                        <h2 className="text-slate-50 mb-4 mobile:mt-8">SUBSCRIBE</h2>
                        <div className="flex items-center h-6 border-slate-100 border-b-2 mr-3 justify-between">
                            <div className="flex justify-center items-center w-full">
                                <MdOutlineMailOutline className="text-gray-300 mr-2" />
                                <input type="text" placeholder="Email" className="my-5 border-none bg-transparent outline-none text-slate-100 w-full" />
                            </div>
                            <GrSend className="text-pink-500 flex mr-9 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex text-slate-50 items-center mobile:ml-8 my-8">
                        <IoLogoInstagram className="hover:text-red-500 cursor-pointer" />
                        <FaXTwitter className="mobile:mx-3 cursor-pointer" />
                        <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
                        <MdLocationPin className="mobile:ml-3 hover:text-red-800 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-20 text-slate-50 mobile:text-xs bg-gray-900">
                © 2024, VERMA CREATIONS All rights reserved
            </div>
        </footer>
    )
};

export default Footer;