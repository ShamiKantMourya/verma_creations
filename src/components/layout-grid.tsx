import React from "react";
import LightGallery from "lightgallery/react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { Images } from "../assets/gallery/gallery";

const GalleryLayout: React.FC = () => {
    return (
        <div className="mt-20 mx-8 lg:columns-3 gap-x-3">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {
                    Images.map((data, index) => (
                        <a href={data.route} key={index}>
                            <img alt={data.alt} src={data.imgSrc} className="block max-w-full py-4 rounded-lg hover:opacity-90 hover:scale-105 ease-out"/>
                        </a>
                    ))
                }
            </LightGallery>
        </div>
    );
};

export default GalleryLayout;