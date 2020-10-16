import {Avatar, CircularProgress} from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import {UserDataContext} from "../../../App";
import RegisteredServiceCard from "../RegisteredServiceCard/RegisteredServiceCard";
import "./RegisteredService.css";

const RegisteredService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  const [registeredServices, setRegisteredServices] = useState([]);

  // --------fetching single client orders--------------
  useEffect(() => {
    fetch(
      "http://localhost:5000/Single-client-registered-services/" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setRegisteredServices(data);
      });
  }, [loggedInUser]);

  return (
    <div className="regsitered-client-services">
      <div className="loadingPosition">
        {registeredServices.length === 0 && <CircularProgress />}
      </div>

      {registeredServices.map((item) => (
        <RegisteredServiceCard serviceDetails={item} />
      ))}
    </div>
  );
};

export default RegisteredService;
