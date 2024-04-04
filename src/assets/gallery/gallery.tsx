import Oryn from "./Oryn.jpeg";
import Animo from "./Animo.jpeg";
import Shot from "./21Shot.jpeg";
import Wallpaper from "./3DWallpaper.jpeg";
import H2R from "./H2Rmusic.jpeg";
import Monk from "./Monk.jpeg";
import Mrchef from "./MrChef.jpeg";
import Nitra from "./NitaraJewels.jpeg";
import Vanguard from "./Vanguard.jpeg";
import Wallpaper2D from "./wallpaper.jpeg";
import Swadeshi from "./swadeshi.jpeg";
import FitFusion from "./FitFushion.jpeg";
import DevOpticals from "./devOpticals.jpeg";
import Shipping from "./shipping.jpeg";
import CashForGold from "./CashForGold.jpeg";
import BarbequeNation from "./BarbequeNation.jpeg";

interface ImagesProps {
    route: string;
    imgSrc: string;
    alt: string
}

export const Images: ImagesProps[] = [
    {
        route: "assets/gallery/Oryn.jpeg",
        imgSrc: Oryn,
        alt: "Oryn"
    },
    {
        route: "assets/gallery/Animo.jpeg",
        imgSrc: Animo,
        alt: "Animo"
    },
    {
        route: "/src/assets/gallery/21Shot.jpeg",
        imgSrc: Shot,
        alt: "21Shot"
    },
    {
        route: "/src/assets/gallery/BarbequeNation.jpeg",
        imgSrc: BarbequeNation,
        alt: "Barbeque Nation"
    },
    {
        route: "/src/assets/gallery/CashForGold.jpeg",
        imgSrc: CashForGold,
        alt: "Cash For Cold"
    },
    {
        route: "/src/assets/gallery/shipping.jpeg",
        imgSrc: Shipping,
        alt: "Shipping Company"
    },
    {
        route: "/src/assets/gallery/devOpticals.jpeg",
        imgSrc: DevOpticals,
        alt: "Dev Opticals"
    },
    {
        route: "/src/assets/gallery/FitFushion.jpeg",
        imgSrc: FitFusion,
        alt: "Fit Fusion Gym"
    },
    {
        route: "/src/assets/gallery/swadeshi.jpeg",
        imgSrc: Swadeshi,
        alt: "Swadeshi"
    },
    {
        route: "/src/assets/gallery/3DWallpaper.jpeg",
        imgSrc: Wallpaper,
        alt: "3D Wallpaper"
    },
    {
        route: "/src/assets/gallery/Vanguard.jpeg",
        imgSrc: Vanguard,
        alt: "Vanguard Diagnostics"
    },
    {
        route: "/src/assets/gallery/wallpaper.jpeg",
        imgSrc: Wallpaper2D,
        alt: "2D Wallpaper"
    },
    {
        route: "/src/assets/gallery/NitaraJewels.jpeg",
        imgSrc: Nitra,
        alt: "Nitara Jewels"
    },
    {
        route: "/src/assets/gallery/MrChef.jpeg",
        imgSrc: Mrchef,
        alt: "Mr Chef"
    },
    {
        route: "/src/assets/gallery/Monk.jpeg",
        imgSrc: Monk,
        alt: "Monk"
    },
    {
        route: "/src/assets/gallery/H2Rmusic.jpeg",
        imgSrc: H2R,
        alt: "H2R Music"
    },
]