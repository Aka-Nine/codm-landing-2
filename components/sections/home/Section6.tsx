import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====SHOLUTIONS AREA START=======*/}
            <div className="solutions9 sp overflow-hidden" style={{ background: "#F3F5F2" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/span9.png" alt="" /> */}
                                     Solutions We Provide
                                </span>
                                <h2 className="text-anime-style-3">Staffing Partner Our Offerings</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon1.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/service-details">Highest Success Rates</Link>
                                        </h4>
                                        <p>Stay tuned for regular updates and to valuable insights from our best team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon2.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/service-details">Recruitment Solutions</Link>
                                        </h4>
                                        <p>Each case study provides an in-depth look at the unique challenges faced.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image3.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon3.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/service-details">Business Planning</Link>
                                        </h4>
                                        <p>These stories highlight our commit to excellence and our ability to adapt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SHOLUTIONS AREA END=======*/}
        </>
    );
}
