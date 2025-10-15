import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact9 sp overflow-hidden" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Contact Us
                                </span>
                                <h2 className="text-anime-style-3">Let's Start The Conversation</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact9-content-area">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="form-area">
                                    <h3>Send Us A Message</h3>
                                    <div className="space16" />
                                    <p>Our response time is within 30 minutes during business hours</p>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="number" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Service Type" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <textarea rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="button-area">
                                                    <button className="theme-btn15" type="submit">
                                                        subscribe
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon1.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Our Location</h5>
                                            <Link href="#">
                                                8708 Technology Forest Pl Suite <br /> 125 -G, The Woodlands, TX 77381
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon2.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Call Or Text</h5>
                                            <Link href="tel:123-456-7890">123-456-7890</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon3.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Email Us Today</h5>
                                            <Link href="mailto:info@taxvice.com">info@taxvice.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
