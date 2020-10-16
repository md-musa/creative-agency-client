import {Avatar} from "@material-ui/core";
import React from "react";
import "./RegisteredServiceCard.css";

const RegisteredServiceCard = ({serviceDetails}) => {
  const {status, service, description, image} = serviceDetails;

  return (
    <div className="registeredService">
      <div className="first-row">
        <Avatar src={image && `data:image\png;base64,${image.img}`} />
        {status == "Done" && (
          <button className="btn-done"> {status && status}</button>
        )}
        {status == "Ongoing" && (
          <button className="btn-ongoing"> {status && status}</button>
        )}
        {status == "Pendding" && (
          <button className="btn-pendding"> {status && status}</button>
        )}
      </div>
      <div>
        <h5>{service}</h5>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default RegisteredServiceCard;
