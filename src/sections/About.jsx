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

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae itaque maxime provident rerum accusantium soluta ad quos ipsam quo laborum praesentium consequuntur corrupti consectetur vero ut deleniti optio expedita vel asperiores, quasi, earum fugiat! Sint maxime animi ex dolore eligendi quis expedita labore commodi perspiciatis cupiditate iste tempora, ipsam facilis similique sunt deleniti vel asperiores? Eos reiciendis voluptatem, qui libero esse eaque repellat voluptas ipsum repellendus? Doloremque saepe commodi possimus dicta sequi atque exercitationem a similique fuga architecto, eos sed sit obcaecati, ipsa quos, expedita accusamus? Maxime minus, expedita, non error vero natus cupiditate facere rem mollitia nisi distinctio saepe quos voluptatibus, neque doloribus nulla deserunt ipsam optio pariatur. Asperiores laudantium possimus reiciendis eveniet ipsum ad nulla, officiis fugiat sint blanditiis ipsa corrupti illo consequuntur ducimus fuga mollitia ipsam a soluta ea libero aliquam? Vel temporibus rem consequatur nesciunt, eum tempora ipsum perferendis consequuntur mollitia distinctio maxime excepturi veritatis iusto illo! Molestiae mollitia est cupiditate doloribus corporis animi ipsum officiis at adipisci, minus, tempora hic quaerat quas incidunt a, explicabo aut labore. Odio dicta neque facilis, quidem, eum ipsa quam labore natus ex, recusandae ratione. Amet iste nemo sit cupiditate nobis. Maxime sed voluptate assumenda consectetur architecto sint esse maiores sunt omnis repellendus eligendi obcaecati ullam amet aliquid vero iste eum asperiores, labore, magni at fuga accusamus nobis iure id. Debitis at expedita ipsam ipsa molestiae
                        </div>
                        <div className='col'>
                            <img className='img-fluid' src={aboutimg} alt="about tss computer repairing" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-none d-md-block'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt repudiandae, laborum soluta veniam hic quidem quod magni eos doloribus quae animi modi illum mollitia sit tempore id. Eligendi, porro illo reprehenderit voluptates corrupti, culpa ratione, expedita voluptatum recusandae autem perferendis alias commodi ut! Labore accusamus suscipit voluptatum dolore officia.
                        </div>
                        <div className='col fw-bold '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur qui perspiciatis incidunt officia iste nihil, sint voluptas! Dolorem atque a architecto accusamus impedit perspiciatis asperiores, veritatis obcaecati nisi fugit iusto ipsum blanditiis eius quasi. Earum, quos. Ullam, quis aliquam nisi ducimus asperiores aut pariatur voluptates nesciunt reprehenderit recusandae adipisci?
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About