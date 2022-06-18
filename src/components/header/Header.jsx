import React from "react";
import Selfie from "../../assets/selfie.png";
import "./Header.css";
import CTA from "./CTA";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Alvin Kim</h1> */}
        <Typical steps={["Alvin Kim", 1000]} wrapper="h1" />
        <Typical
          steps={[
            "Junior Web Developer",
            1500,
            "Junior App Developer",
            1500,
            "Junior Fullstack Developer",
            1500,
          ]}
          loop={Infinity}
          wrapper="h5"
          className="text-light"
        />
        {/* <h5 className="text-light">Junior Fullstack Developer</h5> */}
        <CTA />

        <div className="selfie">
          <img src={Selfie} alt="selfie" />
        </div>
      </div>
    </header>
  );
};

export default Header;
