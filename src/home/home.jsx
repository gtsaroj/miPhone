import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Logo from "../assests/logo.png";

const Home = () => {
  return (
    <section
      className="lg:mt-20 mt-16 w-full flex lg:flex-row flex-col-reverse items-start lg:items-center justify-center "
      id="home"
    >
      <div className="flex max-w-xl w-full items-center justify-start gap-x-10 ">
        <div className="lg:flex hidden ">
          <Social />
        </div>
        <Data />
      </div>
      <div className="flex">
        <div className="flex lg:hidden ">
          <Social />
        </div>
        <div
          style={{
            backgroundImage: `url(${Logo}) `,
          }}
          className="lg:bg-center bg-right bg-contain bg-no-repeat  w-[300px] sm:w-[400px] max-w-[500px] h-[300px]  "
        ></div>
      </div>
    </section>
  );
};

export default Home;
