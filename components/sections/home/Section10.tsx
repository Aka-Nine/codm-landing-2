import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog9 sp overflow-hidden" id="blog" style={{ backgroundColor: "#F3F5F2" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/span9.png" alt="" /> */}
                                     Our Blog
                                </span>
                                <h2 className="text-anime-style-3">Latest News &amp; Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="blog-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog9-img1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <Link href="#" className="date">
                                        <img src="assets/img/icons/date7.svg" alt="" /> 8 December 2025
                                    </Link>
                                    <h4>
                                        <Link href="/blog-details">How To Create An Recruitment Strategy For Your Business</Link>
                                    </h4>
                                    <Link href="/blog-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="blog-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog9-img2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <Link href="#" className="date">
                                        <img src="assets/img/icons/date7.svg" alt="" /> 6 september 2025
                                    </Link>
                                    <h4>
                                        <Link href="/blog-details">Navigating the Challenges of Remote Work Recruitment</Link>
                                    </h4>
                                    <Link href="/blog-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="blog-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog9-img3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <Link href="#" className="date">
                                        <img src="assets/img/icons/date7.svg" alt="" /> 12 april 2025
                                    </Link>
                                    <h4>
                                        <Link href="/blog-details">How Retain In Talent: Strategies for Employee Engagement</Link>
                                    </h4>
                                    <Link href="/blog-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
