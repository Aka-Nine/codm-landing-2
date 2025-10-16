import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero9" style={{ backgroundImage: "url(assets/img/bg/hero9-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                Connect Seamlessly, Grow Exceptionally
                                </span>
                                <h1 className="text-anime-style-3">Empower Your Team with Salesforce Experts</h1>
                                <div className="space16" />
                                <p>
                                At CodM, we don’t just implement Salesforce — we deliver solutions that drive real business impact. By partnering with us, you gain a team of certified experts dedicated to your success.
                                </p>
                                <div className="space30" />
                                <Link className="theme-btn15" href="#contact">
                                    Schedule a Consultation
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-images">
                                <div className="image1" data-aos="zoom-out" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image1.png" alt="" />
                                </div>
                                <div className="image2" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
