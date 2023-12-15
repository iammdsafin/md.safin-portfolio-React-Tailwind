import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

const Certificates = () => {
    const certificates = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="certification py-5" id="certification">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 text-center mx-auto col-12">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="certificate-title">Certificates I have Achieved 📃</h2>
                        </div>
                        <br />
                        <br />
                        <br />
                        <Slider {...settings}>
                            {certificates.map((num) => {
                                return (
                                    <div className="item" key={num}>
                                        <div className="certificate-info content-center">
                                            <img src={`/certificate/certificate-image (${num}).png`} className="certificate-img img-fluid" alt="certificate" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;