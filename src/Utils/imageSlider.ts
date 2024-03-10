import Img1 from "../assets/Signageboard.jpeg";
import Img2 from "../assets/wallpaper.jpg";
import Img3 from "../assets/repair1.jpg";
import Img4 from "../assets/pexels-san-engineer-1935370.jpg";

export interface ImageSliderProps {
  id: Number | String;
  alt: String;
  title: String;
  description: String;
  urls: String;
}

export const sliderData: ImageSliderProps[] = [
  {
    id: 1,
    alt: 'Signage Board',
    title: "Signage Board Works",
    description: "Contact us for signage board works",
    urls: Img1,
  },
  {
    id: 2,
    alt: 'Wallpaper',
    title: "Wallpaper Works",
    description: "Contact us for customised 2D and 3D wallpapers",
    urls: Img2,
  },
  {
    id: 3,
    alt: "Repair Work",
    title: "Repair Works",
    description: "Contact us if you have repair works for your signage boards",
    urls: Img3,
  },
  {
    id: 4,
    alt: "Neon lights",
    title: "Neon Works",
    description: "Contact us for making neon symbols and texts",
    urls: Img4,
  },
];
