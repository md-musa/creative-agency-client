import {CircularProgress} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import OurProjecs from "../OurProjecs/OurProjecs";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  //--------- fetching all services and reviews in homepage------
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="homeContainer">
      <Navbar />
      <Header />
      <CompanyLogo />

      {/*----------- All serveices collection -------------*/}
      <section style={{margin: "180px 0"}}>
        <h3 className="heading">
          <span className="color-brand">Provide awsome</span>{" "}
          <span className="colorGreen">&nbsp;Services</span>
        </h3>
        <div className="row d-flex justify-content-center">
          {/*---------- Loading Progress----------- */}
          {services.length === 0 && <CircularProgress />}

          {services.map((service) => (
            <Services serviceDetails={service} />
          ))}
        </div>
      </section>

      <section>
        <OurProjecs />
      </section>

      <h2 className="heading">
        <span className="color-brand">Clients</span>
        <span className="colorGreen">&nbsp;Feedback</span>
      </h2>

      {/* -------Client review in homepage ------------*/}
      <section style={{padding: "20px 0 200px 0px"}}>
        <div className="row d-flex justify-content-center">
          {/* -------Loading Progress -----------*/}
          {reviews.length === 0 && <CircularProgress />}

          {reviews.map((review) => (
            <FeedbackCard feedback={review} />
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
