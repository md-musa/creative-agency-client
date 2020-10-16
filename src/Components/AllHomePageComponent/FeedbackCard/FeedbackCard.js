import {Avatar} from "@material-ui/core";
import React from "react";
import "./FeedbackCard.css";

const FeedbackCard = (props) => {
  const {name, description, profilePicture, companyName} = props.feedback;

  return (
    <div className="col-sm-9 col-md-3 col-lg-3 feedbackCard">
      <div className="row">
        <div className="col-2">
          <Avatar src={profilePicture ? profilePicture : ""} />
        </div>
        <div className="col-6">
          <span style={{fontSize: "17px"}}>{name}</span>
          <br />
          <small className="color-gray">{companyName && companyName}</small>
          <br />
        </div>
        <div className="col-12">
          <span className="color-gray">{description}</span>
        </div>
      </div>
    </div>
  );
};
export default FeedbackCard;
