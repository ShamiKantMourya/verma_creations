import Img1 from "../../assets/Signageboard.jpeg";
import Img2 from "../../assets/pexels-san-engineer-1935370.jpg";
import Img4 from "../../assets/repair1.jpg";
import Img5 from "../../assets/repairwork.jpg";
import Img6 from "../../assets/wallpaper1.jpeg";

export interface ImageSliderProps {
  id: number;
  alt: string;
  title: string;
  description: string;
  urls: string;
};
interface ContentProps {
  title:string;
  description:string;
  content: JSX.Element;
}


export const sliderData: ImageSliderProps[] = [
  {
    id: 0,
    alt: 'Signage Board',
    title: "Signage Works",
    description: "Contact us for signage board works",
    urls: Img1,
  },
  {
    id: 1,
    alt: "Neon lights",
    title: "Neon Works",
    description: "Contact us for making neon symbols and texts",
    urls: Img2,
  },
  {
    id: 2,
    alt: 'Wallpaper',
    title: "Wallpaper Works",
    description: "Contact us for customised 2D and 3D wallpapers",
    urls: Img6,
  },
  {
    id: 3,
    alt: "Repair Work",
    title: "Repair Works",
    description: "Contact us if you have repair works for your signage boards",
    urls: Img5,
  },
];

export const images = [
  Img1,
  Img2,
  Img6,
  Img4
];

export const image = {
  img1: Img1,
  img2:Img2,
  img3:"hjkvhkjvcbvcn",
  img4: "jgkjdgvfdjvzjv",
  img5:"gklfhgsfkghfslk",
  img6:"hdkj,fjdbjvbv"
}

export const content: ContentProps[] = [
  {
      title: "Collaborative Editing",
      description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content:
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Editing
          </div>
  },
  {
      title: "Real time changes",
      description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content:
          <div className="h-full w-full  flex items-center justify-center text-white">
              <img src={image.img1} alt='signage' loading='lazy' className='h-full w-full' />
          </div>
  },
  {
      title: "Version control",
      description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content:
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version control
          </div>
  },
  {
      title: "Running out of content",
      description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content:
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
          </div>
  },
  {
      title: "Contact Us",
      description:
          "Contact us if you want us to build such amazing signage boards, customize wallpapers and flex for your company",
      content:
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Thank you for visiting our company.
          </div>
  },
];