import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import logo1 from "../assets/Verma Creations white.png";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col mobile:h-auto bg-gray-950">
                <div className="mobile:ml-8">
                    <img src={logo1} alt="logo" className="cursor-pointer moblie:w-8 mobile:h-8 mb-2" />
                    <p className="flex text-slate-50 mobile:text-xs py-1">
                        ©Copyrights 2024 Verma Creations
                    </p>
                    <span className="flex text-slate-50 mobile:text-xs">
                        All rights reserved
                    </span>
                </div>
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50">USEFUL LINKS</h2>
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
                    <h2 className="text-slate-50">LEGAL</h2>
                    <div>
                        <ul>
                            <p className="text-gray-500 hover:text-slate-200">Terms and Conditions</p>
                            <p className="text-gray-500 hover:text-slate-200">Privacy Policy</p>
                            <p className="text-gray-500 hover:text-slate-200">Terms of Sales</p>
                        </ul>
                    </div>
                </div>
                <div className="mobile:ml-8">
                    <h2 className="text-slate-50">SUBSCRIBE</h2>
                    <div className="flex items-center justify-start">
                        <MdOutlineMailOutline className="text-gray-300"/>
                        <input type="text" placeholder="Email" />
                        <GrSend className="text-pink-600"/>
                    </div>
                </div>
                <div className="flex text-slate-50 items-center mobile:ml-8">
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