import React from 'react'

import img1 from "./media/bg3.png"

const Testimonials = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container testimonials'>
                    <h2 className='text-center help-text fw-bolder my-5'>Our <span className='text-danger'>Testimonials</span></h2>

                    <div className='row'>
                        <div className="col testimonials-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-12 col-lg-6 text-related-web-dev d-flex flex-column justify-content-center">
                            <h1>We Can <span className='text-danger fw-bolder text-uppercase'> HELP you with : </span> </h1>
                            <p className='fs-4'>24/7 service provided all-over the nagpur !</p>
                            <p className='fw-bold'>
                                One Contact <span className='text-danger fw-bolder'> for all your need ! </span>
                            </p>
                            <div className=''>
                                <div className="business-id">
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='chess-icons'>
                                            <i class=" fa-solid fa-chess-pawn fa-2x"></i>
                                        </div>
                                        <span className='text-danger fw-bold'>Easy Guide</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi architecto illum quam sint rerum. Corporis nemo modi eaque autem eos, magni </p>
                                </div>
                                <div className="business-id">
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='chess-icons'>
                                            <i class=" fa-solid fa-chess-knight fa-2x "></i>
                                        </div>
                                        <span className='text-danger fw-bold'>Remote Solution</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi architecto illum quam sint rerum. Corporis nemo modi eaque autem eos, magni </p>
                                </div>
                                <div className="business-id">
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='chess-icons'>
                                            <i class=" fa-solid fa-chess-queen fa-2x"></i>
                                        </div>
                                        <span className='text-danger fw-bold'>Instant Support</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi architecto illum quam sint rerum. Corporis nemo modi eaque autem eos, magni </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials