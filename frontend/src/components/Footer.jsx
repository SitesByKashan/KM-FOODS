import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
            <img src="/logo.png" alt=""  width={70} height={70}/>
          KM FOODS</div>
          <div className="right">
            <p>Block 16 Gulshan-e-Iqbal, Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By <a href="https://sitesbykashan.netlify.app/">SITES BY KASHAN</a></p>
          </div>
          <div className="right">
            <p>All Rights Reserved By KM FOODS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;