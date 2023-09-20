import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        // Add validation here to check if the input fields are empty
        const name = form.current.name.value;
        const email = form.current.email.value;
        const project = form.current.project.value;

        if (!name || !email || !project) {
            toast.error("Please fill in all the required fields.");
            return;
        }

        emailjs.sendForm('service_i0jqolo'
            , 'template_1xbcmdp',
            form.current, 'BmBRoInz2nzpO4_Mo')
            .then((result) => {
                toast.success("Message was sent successfully!")
            }, (error) => {
                toast.error("Please Check Your Internet!")
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card"  >
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact-title">Email</h3>
                            <span className="contact__card-data">sarojgt326@gmail.com</span>
                            <a href="mailto:exampleemail@gmail.com" className=" contact__button">Write me {" "}
                                <i className="bx bx-right-arrow-alt  contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card"  >
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact-title">Whatsapp</h3>
                            <span className="contact__card-data">+977-9848255044</span>
                            <a href="" className="href contact__button">Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card"  >
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <h3 className="contact-title">Messenger</h3>
                            <span className="contact__card-data">Saroj GT</span>
                            <a href="" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt  contact__button-icon"></i></a>
                        </div>
                    </div>

                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form action="" ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type='text'
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name'
                                required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type='email'
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your Email'
                                required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="name" id="" cols="30" rows="10"
                                placeholder='Write your project' required></textarea>
                            <button>Send Message</button>
                        </div>


                    </form>

                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </section>
    )
}

export default Contact
