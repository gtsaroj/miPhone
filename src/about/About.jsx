import React from "react";
import Info from "./Info";
import Logo from "../assests/Rounded.jpg";


const About = () => {
  return (
    <section
      className="w-full sm:px-20 px-5 flex  h-full flex-col justify-center items-center "
      id="about"
    >
      <h2 className=" text-lg tracking-wider text-[var(--primary-text)]   ">
        About me
      </h2>
      <span className=" tracking-wider text-[var(--secondary-text)] text-2xl ">
        My introduction
      </span>
      <div className=" flex lg:flex-row gap-5 flex-col items-start justify-center w-full mt-16 ">
        <div className=" col-span-1 h-[340px] w-full lg:w-[400px] ">
         <img src={Logo} className="w-full object-cover h-full rounded-lg" alt="" />
        </div>

        <div className=" lg:w-1/2 w-full flex flex-col lg:items-start items-center justify-start gap-y-14  ">
          <Info />
          <p className=" text-sm tracking-wide text-[var(--secondary-text)] ">
            Hello, I'm saroj gt, a experience developer with a passion for
            crafting digital experiences using ReactJS, NodeJS, ExpressJS,
            MongoDB, PostgreSQL, Stripe, Strapi, and Redux. I'm on a coding
            journey driven by curiosity and a commitment to clean, efficient
            code.
            <br />
            <br />
            If you need a website for your business, I can help. I make sure it
            looks good and doesn't cost too much. Want to see what I've made?
            scroll the below. And if you're thinking about a website, Let's chat
            about it! You can reach out to me through the contact-form below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
