import React, { useState } from "react";
import MovingComponent from "react-moving-text";

const Data = () => {
  const [change, setChange] = useState([
    "MERN STACK DEVELOPER",
    "FULL STACK DEVELOPER",
  ]);

  return (
    <div
      className="w-full flex flex-col items-start justify-center pl-0"
      style={{
        color: "var(--body_color)",
      }}
    >
      <div>
        <MovingComponent
          type="effect3D"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="home__title "
        >
          SAROJ GT
        </MovingComponent>
        <MovingComponent
          type="typewriter"
          dataText={change}
          className="changer"
          style={{
            fontSize: "50px",
          }}
        >
          <span> {setChange}</span>
        </MovingComponent>

        <p className="sm:text-sm text-xs tracking-wide py-1.5 text-[var(--secondary-text)]   ">
          Hi there! I'm an enthusiastic fresher full stack developer with
          passion for creating modern web application
        </p>
      </div>

      <button className="rounded-md hover:bg-blue-600 duration-150 bg-[var(--primary-color)] text-white text-xs mt-4 border-[1px] border-gray-600 py-2 px-4 ">
        <a
          href="https://res.cloudinary.com/dhnvpzxt6/image/upload/v1732780725/Cv_nmnfbc.pdf"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Download CV{" "}
        </a>
      </button>
    </div>
  );
};

export default Data;
