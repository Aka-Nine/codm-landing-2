import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact8 sp overflow-hidden" id="contact" style={{ backgroundColor: "#F7F5FB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading8">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    {/* <img src="assets/img/icons/contact3-icon1.png" alt="" /> */}
                                     Contact Us
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
                                                    <button className="theme-btn14" type="submit">
                                                        submit now
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
                                            <img src="assets/img/icons/contact8-icon1.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Our Location</h5>
                                            <Link href="#">
                                            Supertech Astralis Plot No.1,<br/> Sector 94
                                            Noida, Uttar Pradesh 201301
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact8-icon2.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Call Or Text</h5>
                                            <Link href="tel:123-456-7890">+91 9871717425</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact8-icon3.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Email Us Today</h5>
                                            <Link href="mailto:info@taxvice.com">sales@codmsoftware.com</Link>
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
