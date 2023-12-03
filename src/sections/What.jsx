import React, { useState, useEffect } from 'react';

import "./vendor/fontawesome/css/all.css"


let services_data = [
    { services_icon: "fa-solid fa-gears", services_name: "Dead Device", service_cat: "Desktop/Mobile/Laptop" },
    { services_icon: "fa-solid fa-display", services_name: "Screen Replacement", service_cat: "Laptop/Mobile " },
    { services_icon: "fa-solid fa-xmark", services_name: "No Display", service_cat: "Desktop/Mobile/Laptop" },
    { services_icon: "fa-solid fa-gauge-high", services_name: "SSD Installation", service_cat: "Desktop/Laptop" },
    { services_icon: "fa-solid fa-temperature-high", services_name: "Heat Up", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-database", services_name: "OS Installation", service_cat: "Desktop/Laptop" },
    { services_icon: "fa-solid fa-keyboard", services_name: "Accessories", service_cat: "Desktop/Laptop" },
    { services_icon: "fa-solid fa-print", services_name: "Cartridge Refilling", service_cat: "Printer" },
    { services_icon: "fa-solid fa-download", services_name: "Data Recovery", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-cart-shopping", services_name: "Refurbished Sales", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-gears", services_name: "Repairing", service_cat: "Desktop/Laptop/Mobile/Printer" },
    { services_icon: "fa-solid fa-rss", services_name: "Remote Solution", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-wifi", services_name: "Wifi Services", service_cat: "Network" },
    { services_icon: "fa-solid fa-network-wired", services_name: "Networking", service_cat: "Network" },
    { services_icon: "fa-solid fa-ethernet", services_name: "LAN Config", service_cat: "Network" },
    { services_icon: "fa-solid fa-keyboard", services_name: "Keyboard Replace", service_cat: "Laptop" },
    { services_icon: "fa-solid fa-battery", services_name: "Battery Replace", service_cat: "Laptop/Mobile" },
    { services_icon: "fa-solid fa-laptop-medical", services_name: "Motherboard", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-memory", services_name: "RAM Upgrade", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-video", services_name: "CCTV Installation", service_cat: "CCTV" },
    { services_icon: "fa-solid fa-server", services_name: "DVR/NVR Config", service_cat: "CCTV" },
    { services_icon: "fa-solid fa-exclamation", services_name: "Stucked Printer", service_cat: "Printer" },
    { services_icon: "fa-solid fa-gears", services_name: "Custom Services", service_cat: "Desktop/Laptop/Mobile" },
    { services_icon: "fa-solid fa-gears", services_name: "Doorstep Services", service_cat: "Desktop/Laptop/Mobile" }
]

let ServiceCard = (props) => {

    return (
        <>
            <div className='col-md-4 col-lg-3 col-12'>
                {/* Your service card content */}
                <div className='card service-card shadow'>

                    <div className='row'>
                        <div className='card-body d-flex align-items-center gap-3'>
                            <i className={`${props.services_icon} fa-2x`}></i>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold fs-4'>{props.services_name}</span>
                                <span className='text-danger fw-semibold'>{props.service_cat}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#bookModel-${props.services_name.replace(/\s/g, '')}`}>
                    Book An Appointment
                </button>
                {/* <!-- Modal --> */}
                <div className="modal fade " id={`bookModel-${props.services_name.replace(/\s/g, '')}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    Please Provide us few details
                                    <br />
                                    <h2>Instant <span className='text-danger'> Solution </span></h2>
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='p-2 d-flex flex-column gap-3'>
                                    <input className='form-control' type="text" name='c_name' placeholder='Enter Your Name' required />
                                    <input className='form-control' type="tel" name='c_name' placeholder='Enter Your Contact' required />
                                    <div className='d-flex'>
                                        <input className='form-control' type="date" />
                                        <input className='form-control' type="time" />
                                    </div>
                                    <input className='form-control' type="tel" name='c_name' placeholder={props.services_name} required disabled />
                                    <textarea className='form-control' placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const What = () => {

    const [showServices, setShowServices] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowServices(true);
        }, 500);
    }, [])

    const [selectedDevice, setSelectedDevice] = useState('Select !');

    const handleDeviceChange = (event) => {
        setSelectedDevice(event.target.value);
    };

    const filteredServices = selectedDevice !== 'Select !'
        ? services_data.filter(service => service.service_cat.toLowerCase().includes(selectedDevice.toLowerCase()))
        : services_data;

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='container'>
                    <div className='selection-dropdown p-3 bg-dark rounded-3 shadow-sm d-flex flex-md-row flex-column justify-content-evenly 
                        align-items-center'>
                        <span className='text-light fs-4 d-none d-md-block'>Which device are you experiencing problems with?</span>
                        <span className='text-light fs-6 d-md-none fw-bold'>Which device are you experiencing problems with?</span>

                        <div className='device-box'>
                            <select
                                className='form-select devices-select-box ms-auto'
                                name="devices"
                                id="devices"
                                onChange={handleDeviceChange}
                                value={selectedDevice}
                            >
                                <option value="Select !">Select !</option>
                                <option value="Desktop">Desktop</option>
                                <option value="laptop">Laptop</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Printer">Printer</option>
                                {/* <option value="Tablet PC">Tablet PC</option> */}
                                {/* <option value="Monitor">Monitor</option> */}
                                {/* <option value="Smart TV">Smart TV</option> */}
                                <option value="cctv">CCTV</option>
                            </select>
                        </div>

                    </div>
                </div>
                {/* services */}
                <div className='container my-4'>
                    <h2 className='text-center help-text fw-bolder my-5'>We Can <span className='text-danger'>Help You With</span></h2>
                    <div className={`services-card-collection ${showServices ? 'show' : ''}`}>
                        <div className='row gy-3'>
                            {filteredServices.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    services_icon={service.services_icon}
                                    services_name={service.services_name}
                                    service_cat={service.service_cat}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default What