import React from "react";
import "./CompanyLogo.css";
import logo1 from "../../../images/logos/airbnb.png";
import logo2 from "../../../images/logos/uber.png";
import logo3 from "../../../images/logos/slack.png";
import logo4 from "../../../images/logos/netflix.png";
import logo5 from "../../../images/logos/google.png";

const CompanyLogo = () => {
  return (
    <section className="mt-5 row d-flex justify-content-center pt-5">
      <div className="col-md-2 col-sm-4">
        <img
          style={{
            width: "159px",
            height: "41px",
          }}
          src={logo3}
          alt=""
        />
      </div>
      <div className="col-md-2 col-sm-4">
        <img
          style={{
            width: "129px",
            height: "44px",
          }}
          src={logo5}
          alt=""
        />
      </div>
      <div className="col-md-2 col-sm-3">
        <img
          style={{
            width: "99px",
            height: "56px",
          }}
          src={logo2}
          alt=""
        />
      </div>
      <div className="col-md-2 col-sm-3">
        <img style={{width: "120px", height: "67px"}} src={logo4} alt="" />
      </div>

      <div className="col-md-2 col-sm-3">
        <img
          style={{
            width: "161px",
            height: "51px",
          }}
          src={logo1}
          alt=""
        />
      </div>
    </section>
  );
};
export default CompanyLogo;
