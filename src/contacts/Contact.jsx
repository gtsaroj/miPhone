import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const form = useRef();

  const [isloading, setIsloading] = useState(false);

  const handleSubmit = (e) => {
    setIsloading(true);
    try {
      e.preventDefault();
      
      emailjs
        .sendForm(
          "service_gqdyvxm",
          "template_vb23a74",
          form.current,
          "UC5LLPf8xLY_s6tlh"
        )
        .then((result) => {
          toast.success("Message was sent successfully!");
          
        });
    } catch (error) {
      console.log(error);
      toast.error("Please Check Your Internet!");
    }
    setIsloading(false);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact-title">Email</h3>
              <span className="contact__card-data">sarojgt326@gmail.com</span>
              <a
                href="mailto:sarojgt326@gmail.com"
                className=" contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt  contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact-title">Whatsapp</h3>
              <span className="contact__card-data">+977-9848255044</span>
              <a
                href="https://api.whatsapp.com/send?phone=+977-9848255044"
                className="href contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <LinkedInIcon />
              <h3 className="contact-title">Linkedlen</h3>
              <span className="contact__card-data">Saroj GT</span>
              <a
                href="https://www.linkedin.com/in/saroj-gt-06a411255/"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt  contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form
            action=""
            ref={form}
            onSubmit={handleSubmit}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="from_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="from_gmail"
                className="contact__form-input"
                placeholder="Insert your Email"
                required
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Write your project"
                required
              ></textarea>
            </div>
            <div className="button-v2">
              <button style={{ fontSize: "17px" }} type="submit">
                {isloading ? (
                  <div>
                    {" "}
                    <ReactLoading
                      type={"spin"}
                      color="blue"
                      height={"20px"}
                      width={"20px"}
                    />{" "}
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default Contact;
