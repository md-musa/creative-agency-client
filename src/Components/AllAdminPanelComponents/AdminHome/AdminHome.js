import React, {useContext, useEffect, useState} from "react";
import "./AdminHome.css";
import OrderService from "../OrderService/OrderService";
import RegisteredService from "../RegisteredService/RegisteredService";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddNewService from "../AddNewService/AddNewService";
import AllRegisteredServices from "../AllRegisteredServices/AllRegisteredServices";
import {UserDataContext} from "../../../App";
import logo from "../../../images/logos/logo.png";
import {Link} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";

const AdminHome = () => {
  const [showComponent, setShowComponent] = useState({
    order: true,
    registeredService: false,
    review: false,
    serviceList: false,
    addService: false,
    makeAdmin: false,
  });

  // ---------Remove previous active sidebar button and adding state on new button--------------
  const handleShowComponent = (data) => {
    const newShowComponent = {...showComponent};

    Object.keys(newShowComponent).forEach((key) => {
      newShowComponent[key] = false;
    });
    newShowComponent[data] = true;
    setShowComponent(newShowComponent);
  };

  // ------Checking  admin or not-----------
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  const [isAdmin, setIsAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/isAdminExist/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="adminHome">
      {/* -----------Admin panel sidebar all Button ------------ */}
      <div className="adminHome__left-section">
        <Link to="/">
          <img style={{height: "59px", margin: "0px 20px 19px"}} src={logo} />
        </Link>
        <h6
          className={showComponent.order && "activeButton"}
          onClick={() => handleShowComponent("order")}
        >
          Order
        </h6>
        <h6
          className={showComponent.registeredService && "activeButton"}
          onClick={() => handleShowComponent("registeredService")}
        >
          Service list
        </h6>
        <h6
          className={showComponent.review && "activeButton"}
          onClick={() => handleShowComponent("review")}
        >
          Review
        </h6>
        {/* --------Loading Progress------ */}
        {isAdmin.length === 0 && <CircularProgress />}

        {/* ------Checking if admin or not. Admin can see this sidebar button--------*/}
        {isAdmin.length > 0 && (
          <>
            <h6
              className={showComponent.serviceList && "activeButton"}
              onClick={() => handleShowComponent("serviceList")}
            >
              All Orders List
            </h6>
            <h6
              className={showComponent.addService && "activeButton"}
              onClick={() => handleShowComponent("addService")}
            >
              Add service
            </h6>
            <h6
              className={showComponent.makeAdmin && "activeButton"}
              onClick={() => handleShowComponent("makeAdmin")}
            >
              Make Admin
            </h6>
          </>
        )}
      </div>
      {/* --------show component based on sidebar button click --------------*/}
      <div className="adminHome__right-section">
        <div className="adminHome__database">
          {showComponent.order && <OrderService />}
          {showComponent.registeredService && <RegisteredService />}
          {showComponent.review && <Review />}
          {showComponent.serviceList && <AllRegisteredServices />}
          {showComponent.addService && <AddNewService />}
          {showComponent.makeAdmin && <MakeAdmin />}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
