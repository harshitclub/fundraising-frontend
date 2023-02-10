import React from "react";
import "../Styles/Components/Mission.css";
import image1 from "../assets/mission3.png";
import image2 from "../assets/MED.png";
import image3 from "../assets/ND.png";
import image4 from "../assets/SAMUHIK.png";

const Mission = () => {
  return (
    <>
      <div className="mContainer">
        <div className="mission-container">
          <div className="mission-l">
            <h3>Mission and Goals of Organisation</h3>
            <p>
              We pledge to help women overcome oppression become self-reliant.
              Sadhna is constant rumination towards women’s safety, honour,
              sustainable transformation to reinvent themselves and build the
              nation as a whole!
            </p>
            <h4 className="vision-h">Vision of Organisation</h4>
            <p className="vision-p">
              To make every woman aware of her being, discover a voice, and
              respect her choices to uncover her potential.
            </p>
          </div>
          <div className="mission-r">
            <div className="m-upper">
              <div className="m-box">
                <h4>Education</h4>
                <img src={image1} alt="" />
                {/* <p>Learn More-</p> */}
              </div>
              <div className="m-box">
                <h4>Medical Services</h4>
                <img src={image2} alt="" />
                {/* <p>Learn More-</p> */}
              </div>
            </div>
            <div className="m-upper">
              <div className="m-box">
                <h4>Natural Disaster</h4>
                <img src={image3} alt="" />
                {/* <p>Learn More-</p> */}
              </div>
              <div className="m-box">
                <h4>Samuhik Vivah</h4>
                <img src={image4} alt="" />
                {/* <p>Learn More-</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;

// Vision
// To make every woman aware of her being, discover a voice, and respect her choices to uncover her potential.
