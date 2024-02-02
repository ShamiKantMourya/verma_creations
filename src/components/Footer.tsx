import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import logo1 from "../assets/Verma Creations white.png";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col mobile:h-auto bg-gray-950">
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
                        <ul>
                            <p className="text-gray-500 hover:text-slate-200">Home</p>
                            <p className="text-gray-500 hover:text-slate-200">Services</p>
                            <p className="text-gray-500 hover:text-slate-200">Gallery</p>
                            <p className="text-gray-500 hover:text-slate-200">About</p>
                            <p className="text-gray-500 hover:text-slate-200">Contact Us</p>
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
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50 mt-4 mb-2">SUBSCRIBE</h2>
                    <div className="flex items-center h-6 border-slate-100 border-b-2 mr-3 justify-between">
                        <div className="flex justify-center items-center w-full">
                        <MdOutlineMailOutline className="text-gray-300 mr-2"/>
                        <input type="text" placeholder="Email" className="my-5 border-none bg-transparent outline-none text-slate-100 w-full" />
                        </div>
                        <GrSend className="text-pink-500 flex mr-9"/>
                    </div>
                </div>
                <div className="flex text-slate-50 items-center mobile:ml-8 my-5">
                    <IoLogoInstagram className="hover:text-red-500"/>
                    <FaXTwitter className="mobile:mx-3"/>
                    <FaFacebookF className="hover:text-blue-700"/>
                    <MdLocationPin className="mobile:ml-3 hover:text-red-800"/>
                </div>
            </div>
            <div className="flex justify-center items-center h-20 text-slate-50 mobile:text-xs bg-gray-900">
                © 2024, VERMA CREATIONS All rights reserved
            </div>
        </footer>
    )
};

export default Footer;