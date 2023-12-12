import React from 'react'

import logo from "./media/tech_trans_logo.png"

import "./vendor/fontawesome/css/all.css"

const Footer = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='container py-5'>
                    <div className='row text-light'>
                        <div className="col-12 col-md-4 d-flex flex-column gap-5">
                            <h1>Quick Contact</h1>

                            <ul type="none" className='d-flex flex-column gap-3 p-0'>
                                <li>
                                    <i className='fa-solid fa-home me-3'></i>
                                    <span> plot 56/57, shri ram nagar, near uday nagar chowk,
                                        manewada road, nagpur 440034</span>
                                </li>
                                <li>
                                    <i className='fa-solid fa-phone me-3'></i>
                                    <span> +91 8237895726 | 8857032120</span>
                                </li>
                                <li>
                                    <i className='fa-solid fa-envelope me-3'></i>
                                    <span> techsyncsolution0@gmail.com </span>
                                </li>
                            </ul>

                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column gap-5">
                            <h1>Quick Links</h1>

                            <ul type="none" className='d-flex flex-column gap-3 p-0'>
                                <li>
                                    <i className='fa-solid fa-check me-3'></i>
                                    <a className='text-light' href="">Quatations & Services</a>
                                </li>
                                <li>
                                    <i className='fa-solid fa-check me-3'></i>
                                    <a className='text-light' href="">Collaboration</a>
                                </li>
                                <li>
                                    <i className='fa-solid fa-check me-3'></i>
                                    <a className='text-light' href="">Our Services</a>
                                </li>
                                <li>
                                    <i className='fa-solid fa-check me-3'></i>
                                    <a className='text-light' href="">Offers & Updates</a>
                                </li>

                            </ul>


                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column gap-5">
                            <h1>Offers Notifications</h1>

                            <div className='d-flex flex-column gap-3 aling-items-center'>
                                <input className='form-control' type="text" placeholder='Email Address / WhatsApp Number' />
                                <button className='btn btn-success'>Submit</button>
                                <div>
                                    <h3>Stay Connected : <i className='fa-brands fa-facebook'></i> <i className='fa-brands fa-instagram'></i> <i className='fa-brands fa-telegram'></i> <i className='fa-brands fa-whatsapp'></i> </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer