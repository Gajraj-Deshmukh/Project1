import React from "react";
import Diksha from "../images/Diksha.jpeg";
import Jivan from "../images/Jivan.jpg";
import Amol from "../images/Amol.jpg";
import Gajraj from "../images/Gajraj.jpg";
import Danzil from "../images/Danzil.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Diksha} alt="Diksha" />
                        </div>
                        <div className="img-text">
                          <h2> Diksha Wakode</h2>
                          <p>
                            Hi I'm Diksha Wakode. I'm currently pursuing
                            Diploma in CDAC Mumbai, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Jivan} alt="Jivan" />
                        </div>
                        <div className="img-text">
                          <h2>Jivan Chavan</h2>
                          <p>
                            Hi I'm Jivan Chavan. I'm currently pursuing Diploma in CDAC
                            Mumbai, and my role in the project is backend
                            developer.
                          </p>
                          
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Amol} alt="Amol" />
                        </div>
                        <div className="img-text">
                          <h2>Amol Chormale</h2>
                          <p>
                            Hi I'm Amol Chormale. I'm currently pursuing
                            Diploma in CDAC Mumbai, and my role in the project
                            is backend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Gajraj} alt="Gajraj" />
                        </div>
                        <div className="img-text">
                          <h2>Gajraj Deshmukh</h2>
                          <p>
                            Hi I'm Gajraj Deshmukh. I'm currently pursuing
                            Diploma in CDAC Mumbai, and my role in the project
                            is backend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Danzil} alt="Danzil" />
                        </div>
                        <div className="img-text">
                          <h2>Danzil Benjamin</h2>
                          <p>
                            Hi I'm Danzil Benjamin. I'm currently pursuing Diploma
                            in CDAC Mumbai, and my role in the project is
                            frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
