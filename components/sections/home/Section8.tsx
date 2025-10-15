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
            slidesPerView: 1,
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
        nextEl: ".tes6-next-arrow",
        prevEl: ".tes6-prev-arrow",
    },
};
export default function Section8() {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className="tes9 sp overflow-hidden" id="tes" style={{ backgroundColor: "#F3F5F2" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/span9.png" alt="" /> */}
                                     our testimonials
                                </span>
                                <h2 className="text-anime-style-3">Stories From Our Client</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="arrows-button">
                                <button className="tes6-next-arrow">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button className="tes6-prev-arrow">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tes6-all-slider" data-aos="fade-up" data-aos-duration={800}>
                                <Swiper {...swiperOptions} className="tes6-slider">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>“At Recrute, we pride ourselves on the positive impact we make for our clients and candidates. But don’t just take our word for it-hear from those who have experienced our staffing solutions.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Tina Wilkinson</Link>
                                                <p className="text">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Success stories from our clients and candidates are at the heart of what we do. Our testimonials provide insight to into how Recrute has helped your own businesses find top talent individuals.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alex Ferguson</Link>
                                                <p className="text">CEO, Ranboz Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Our success is best told through the experiences of those we've had the on privilege to work with. At Recrute best Company Name], our testimonials are a collection of real-life success stories.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alzari Joseph</Link>
                                                <p className="text">CEO, BIGS Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>“At Recrute, we pride ourselves on the positive impact we make for our clients and candidates. But don’t just take our word for it-hear from those who have experienced our staffing solutions.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Tina Wilkinson</Link>
                                                <p className="text">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Success stories from our clients and candidates are at the heart of what we do. Our testimonials provide insight to into how Recrute has helped your own businesses find top talent individuals.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alex Ferguson</Link>
                                                <p className="text">CEO, Ranboz Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Our success is best told through the experiences of those we've had the on privilege to work with. At Recrute best Company Name], our testimonials are a collection of real-life success stories.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alzari Joseph</Link>
                                                <p className="text">CEO, BIGS Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
