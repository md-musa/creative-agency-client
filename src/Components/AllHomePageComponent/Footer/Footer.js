import React from "react";
import "./Footer.css";

const Footer = () => {
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
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="input-field"
              placeholder="Your email adress"
            />
            <br />
            <input
              type="text"
              className="input-field"
              placeholder="Company name"
            />
            <br />
            <textarea
              placeholder="Your massege"
              className="input-field"
              style={{height: "100px", width: "400px"}}
            ></textarea>
            <br />
            <button
              style={{width: "134px", height: "45px"}}
              type="button"
              class="btn btn-dark"
            >
              <b>Send</b>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Footer;
