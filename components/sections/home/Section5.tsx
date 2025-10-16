import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work9 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/span9.png" alt="" /> */}
                                     how it works
                                </span>
                                <h2 className="text-anime-style-3">Simple Staffing Procedures</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="col-lg-10 m-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="work-box">
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work9-bg1.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="#contact">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="work-box">
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work9-bg2.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="#contact">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="work-box">
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work9-bg3.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="#contact">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}
