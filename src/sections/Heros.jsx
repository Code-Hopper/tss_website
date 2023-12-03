import { React } from 'react'

import "./vendor/fontawesome/css/all.css"

// images 
import heros_img from "./media/bg1.png"

// sub_sections
import Typewriter from "typewriter-effect";


const Heros = () => {

    return (
        <>
            <div className='heros-all-container position-relative shadow'>
                <div className='heros-section'>
                    <div className='container-fluid heros-content'>
                        <div className='container'>
                            <div className='row align-items-center text-center text-md-start'>
                                <div className="col-md-6 col-12">
                                    {/* <h4 className='fw-semibold heros-welcome'>Welcome !</h4> */}
                                    <h2>
                                        <span className='psolution fs-5'>Professional Service for </span>
                                        <span className='fw-bolder typing-title d-block'>
                                            <Typewriter
                                                options={{
                                                    strings: ['Laptop', 'Desktop', 'Software Fixes', 'Data Recovery', 'System Upgrades'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </h2>
                                    <p className='text-dark d-none d-md-block'>
                                        We are from | Nagpur 🍊
                                        <br />
                                        Based in Nagpur, our tech support company caters to businesses of all sizes,
                                        Offering comprehensive services to both retail consumers and corporate enterprises.
                                        We specialize in addressing diverse tech needs, ensuring seamless operations,
                                        Bringing expertise and support to enhance efficiency and productivity.
                                    </p>
                                    <p className='fw-bolder fs-2'><span className='text-danger'> #1 </span> Best Tech-Support </p>
                                    {/* <p className='fw-thin fs-2 fst-italic'><span className='Tagline-text'> Synchronizing </span> Success</p> */}

                                    <div className='heros-cta'>
                                        <a href="tel:+91 8237895726">
                                            <button className='heros-cta'>
                                                <span className='heros-cta-btn'>Contact @ +91 8237895726 </span>
                                                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 heros-img-section-animation">
                                    <div className='heros-container'>
                                        <img className='img-fluid heros-img ms-auto' src={heros_img} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heros