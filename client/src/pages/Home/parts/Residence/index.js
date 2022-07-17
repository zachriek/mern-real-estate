// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArchiveFill, DisplayportFill, PlusSquareDotted } from 'react-bootstrap-icons';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// CSS
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';

const Residence = ({ data }) => {
    const [slidesPerView, setSlidesPerView] = useState('');

    const changeSlidesPerView = () => {
        if (window.innerWidth <= 576) {
            setSlidesPerView(1);
        } else if (window.innerWidth > 576 && window.innerWidth < 768) {
            setSlidesPerView(2);
        } else if (window.innerWidth >= 768) {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        changeSlidesPerView();
        window.addEventListener('resize', changeSlidesPerView);
    }, []);

    return (
        <section className="my-5" id="residence" style={{ background: "url('/assets/images/residence-bg.png') no-repeat", backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="heading">Popular Residence</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4">
                        <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={slidesPerView} navigation>
                            {data.map((residence, index) => (
                                <SwiperSlide key={index}>
                                    <div className="card">
                                        <img src={residence.image} alt="residence-img" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{residence.name}</h5>
                                            <p className="card-text">{residence.location}</p>
                                            <div className="d-flex mt-4" style={{ flexWrap: 'wrap', columnGap: '1.5rem', rowGap: '0.4rem' }}>
                                                <div className="bed-icon">
                                                    <DisplayportFill />
                                                    <span className="ml-2">
                                                        {residence.bed} {residence.bed > 1 ? 'Beds' : 'Bed'}
                                                    </span>
                                                </div>
                                                <div className="bath-icon">
                                                    <ArchiveFill />
                                                    <span className="ml-2">
                                                        {residence.bath} {residence.bath > 1 ? 'Bath' : 'Baths'}
                                                    </span>
                                                </div>
                                                <div className="square-icon">
                                                    <PlusSquareDotted />
                                                    <span className="ml-2">{residence.size} m2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Link to="/" className="btn btn-lg btn-primary shadow-sm">
                            View All Properties
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Residence;
