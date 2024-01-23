import AdSlider from "./AdSlider/AdSlider.jsx";
import BannerUno from '../../assets/imgs/carousel/banner_xiaomi.jpg'
import BannerDos from '../../assets/imgs/carousel/banner_iphone.jpg'
import BannerTres from '../../assets/imgs/carousel/banner_samsung.jpg'

const containerStyles = {
    width: "auto",
    height: "70vh",
    margin: "0 auto",
};

const imagesAdSlider = [
    {
        label: "Banner Xiaomi",
        imgPath: BannerUno,
    },
    {
        label: "Banner Iphone",
        imgPath: BannerDos,
    },
    {
        label: "Banner Samsung",
        imgPath: BannerTres,
    },
];


const Carousel = () => {

    return (

        <div>

            <div style={containerStyles}>

                <AdSlider slides={imagesAdSlider} />

            </div>

        </div>

    );

};

export default Carousel;
