import Link from "next/link";

export default function Section12() {
    return (
        <>
            {/*=====CTA AREA START=======*/}
            <div className="cta9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="heading6-w">
                                <h2>Ready To Power Up Your Savings And Reliability?</h2>
                                <div className="space16" />
                                <p>Feel free to customize this paragraph to better reflect the specific services offered by your IT solution &amp; the unique </p>
                                <div className="form-area">
                                    <form action="#">
                                        <input type="email" placeholder="Your Email Address" />
                                        <div className="button">
                                            <button className="theme-btn15" type="submit">
                                                subscribe
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="images">
                                <div className="img1">
                                    <img src="assets/img/others/cta6-bg.png" alt="" />
                                </div>
                                <div className="img2">
                                    <img src="assets/img/others/cta6-image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CTA AREA END=======*/}
        </>
    );
}
