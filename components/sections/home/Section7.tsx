"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".case7-next-arrow1",
        prevEl: ".case7-prev-arrow1",
    },
};
export default function Section7() {
    return (
        <>
            {/*=====CASE AREA START=======*/}
            <div className="case9 sp overflow-hidden" id="case">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/span9.png" alt="" />  */}
                                    case studies
                                </span>
                                <h2 className="text-anime-style-3">Our Success All Project</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="arrows-button">
                                <button className="case7-next-arrow1">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button className="case7-prev-arrow1">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper {...swiperOptions} className="case7-slider" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing solution</p>
                                    <h4>
                                        <Link href="#contact">Real-World Staffing Solutions</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing success</p>
                                    <h4>
                                        <Link href="#contact">Client Success Highlights</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image3.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing Challenge</p>
                                    <h4>
                                        <Link href="#contact">Transforming Challenges Into</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing solution</p>
                                    <h4>
                                        <Link href="#contact">Real-World Staffing Solutions</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing success</p>
                                    <h4>
                                        <Link href="#contact">Client Success Highlights</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/service/service7-image3.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <p>staffing Challenge</p>
                                    <h4>
                                        <Link href="#contact">Transforming Challenges Into</Link>
                                    </h4>
                                    <Link href="#contact" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====CASE AREA END=======*/}
        </>
    );
}
