import React, {useContext} from "react";
import {DataContext} from "../core/contexts/data";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import {EffectCube, Pagination} from "swiper";

const Carousel = () => {
    const carousel = useContext(DataContext).carousel;

    return (
        <>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="carousel"
            >
                {carousel.map((image: string) => (
                    <SwiperSlide>
                        <div key={image} className={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
