import React from 'react'

import aboutimg from "./media/bg2.png"

const About = () => {
    return (
        <>
            <div id='about' className='contaier-fluid'>

                <div className='container'>
                    <div className='row'>
                        <div className='col d-none d-md-flex flex-column align-items-center'>

                            <h2 className='text-center help-text fw-bolder my-5'>About <span className='text-danger'>Us</span></h2>

                            Founded in 2020, Tech Sync Solution emerged as a response to the prevalent challenges in the realm of computer hardware and networking services. The inspiration behind our establishment was the recognition of a gap in quality maintenance and prompt services within the industry. Since then, we have dedicated ourselves to delivering optimal solutions for both individuals and companies.

                            <span className='fw-bold'>Our Commitment to Excellence:</span>
                            At Tech Sync Solution, our commitment to providing the best solutions is unwavering. We understand the diverse needs of our clients, and we strive to exceed expectations at every turn. Whether you are an individual seeking reliable computer hardware services or a company in need of robust networking solutions, we have tailored offerings to meet your specific requirements.

                            <span className='fw-bold'>Structured Communication and Transparency:</span>
                            One aspect that sets us apart is our commitment to communication and transparency. We have implemented a structured system to keep our clients informed about the status of any assigned job. This ensures that you are always in the loop, allowing for a smoother and more transparent experience.

                        </div>
                        <div className='col'>
                            <img className='img-fluid' src={aboutimg} alt="about tss computer repairing" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-none d-md-block'>
                            <span className='fw-bold'>Mission - Pan India Solutions: </span>
                            Our mission at Tech Sync Solution is clear - to provide comprehensive computer hardware and networking solutions across the length and breadth of India. We aim to bridge the gap between quality services and accessibility, catering to both companies and retail clients.

                            <br />

                            <span className='fw-bold d-block'>Diverse Clientele:</span>
                            Tech Sync Solution caters to a diverse clientele, ranging from companies with intricate networking needs to retail clients seeking reliable hardware solutions. Our tailored services and commitment to excellence make us a preferred choice for clients across different sectors.

                        </div>
                        <div className='col'>
                            <span className='fw-bold d-block'>Certified Expertise:</span>
                            Staying at the forefront of technological advancements is crucial, and we take pride in our team's certified expertise in both hardware and networking. This ensures that our clients receive services backed by the latest industry knowledge and standards.

                            <span className='fw-bold d-block'>Credit Lines and Priority Services: </span>
                            To further enhance our client experience, we offer credit lines and priority services. This not only streamlines the process but also demonstrates our dedication to providing flexible and accommodating solutions.
                            <br />
                            At Tech Sync Solution, we are not just a service provider; we are your dedicated partner in navigating the ever-evolving landscape of computer hardware and networking. Experience the difference with Tech Sync - where quality meets efficiency.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About