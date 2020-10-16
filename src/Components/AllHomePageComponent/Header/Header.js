import React from "react";
import "./Header.css";
import image from "../../../images/logos/Frame.png";

const Header = () => {
  return (
    <div className="header-main">
      <div className=" container header-main-container">
        <main className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
            <h1>
              Let's Grow Your <br /> Brand To The <br />
              Next Level
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              repellendus!
            </p>
            <button
              style={{width: "134px", height: "45px"}}
              type="button"
              class="btn btn-dark"
            >
              <b>Hire us</b>
            </button>
          </div>
          <div className="col-md-6">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Header;
