import React, { useEffect } from "react";
import "./Qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    setToggleState(1);
  }, []);

  return (
    <section className="qualification__sections" id="profile">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex active"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex active"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"> </i>{" "}
            Experience & Skill
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? " qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle">
                  Udemy online course
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021 -2023
                </div>
              </div>
              <div className="line-1">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h2 className="qualification__title">+2 Science</h2>
                <span className="qualification__subtitle">
                  Tribhuwan Secondary School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2020 -2022
                </div>
              </div>
            </div>

            {/* dublicate of up */}

            <div className="qualification__data">
              <div>
                <h2 className="qualification__title">Web Development</h2>
                <span className="qualification__subtitle">
                  Udemy online course
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h2 className="qualification__title">Bachelor in IT</h2>
                <span className="qualification__subtitle">
                  Texas college of IT and management
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2022-continue
                </div>
              </div>
            </div>
            {/* hseakjksjdflf */}
          </div>

          {/* ================================================= */}
          <div
            className={
              toggleState === 2
                ? "qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h2 className="qualification__title">Front-End development</h2>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>
            </div>

            {/* dublicate of up */}

            <div className="qualification__data">
              <div>
                <h2 className="qualification__title">web Development</h2>
                <span className="qualification__subtitle">
                  Graphstick Nepal
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* hseakjksjdflf */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h2 className="qualification__title">Backend Developer</h2>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
