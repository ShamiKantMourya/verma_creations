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
                <div>
                    <h2 className="text-slate-50">USEFUL LINKS</h2>
                    <div>
                        <ul>
                            <p className="text-slate-50">Home</p>
                            <p className="text-slate-50">Services</p>
                            <p className="text-slate-50">Gallery</p>
                            <p className="text-slate-50">About</p>
                            <p className="text-slate-50">Contact Us</p>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-slate-50">LEGAL</h2>
                    <div>
                        <ul>
                            <p className="text-slate-50">Terms and Conditions</p>
                            <p className="text-slate-50">Privacy Policy</p>
                            <p className="text-slate-50">Terms of Sales</p>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-slate-50">SUBSCRIBE</h2>
                    <div className="flex">
                        <MdOutlineMailOutline />
                        <input type="text" placeholder="Email" />
                        <GrSend />
                    </div>
                </div>
                <div className="flex">
                    <IoLogoInstagram />
                    <FaXTwitter />
                    <FaFacebookF />
                    <MdLocationPin />
                </div>
            </div>
            <div className="flex justify-center items-center h-20 text-slate-50 mobile:text-xs bg-gray-900">
                © 2024, VERMA CREATIONS All rights reserved
            </div>
        </footer>
    )
};

export default Footer;