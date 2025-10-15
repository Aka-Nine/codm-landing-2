"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function Section2() {
    return (
        <>
            {/*=====HERO SLIDER AREA END=======*/}
            <div className="hero9-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions} className="logo-slider">
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo3.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo4.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo5.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo6.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo3.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo4.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo5.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide className="single-slider">
                                    <img src="assets/img/logo/hero9-logo6.png" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO SLIDER AREA END=======*/}
        </>
    );
}
