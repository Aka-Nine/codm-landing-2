import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about9 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images-all">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image2.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about9-image3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                     About CodM
                                </span>
                                <h2 className="text-anime-style-3">Empower Your Team with Salesforce Experts</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={700}>
                                    At CodM, we don’t just implement Salesforce — we deliver solutions that drive real business impact. By partnering with us, you gain a team of certified experts dedicated to your success.
                                </p>
                                <div className="space10" />
                                <div className="row" data-aos="fade-left" data-aos-duration={1000}>
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Certified Salesforce Experts
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Customized Solutions
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Real Business Impact
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Continuous Improvement
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link className="theme-btn15" href="#contact">
                                        Join Our Network
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
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
