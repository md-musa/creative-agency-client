import React, {useContext, useState} from "react";
import {ServiceDetailsToForm, UserDataContext} from "../../../App";
import ButtonLoading from "../../AllHomePageComponent/ButtonLoading/ButtonLoading";
import "./OrderService.css";

// Order new service from admin panel------------
const OrderService = () => {
  const [serviceDetails, setServiceDetails] = useContext(ServiceDetailsToForm);
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);

  const [orderService, setOrderService] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    image: serviceDetails.image,
    price: "",
    service: serviceDetails.service,
    description: "",
    status: "Pendding",
  });
  const [file, setFile] = useState(null);

  const hendelBlur = (e) => {
    const newSubscribeToService = {...orderService};
    newSubscribeToService[e.target.name] = e.target.value;
    setOrderService(newSubscribeToService);
  };

  const handleImage = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // --------Send data order's form data to server-------------
  const handleSubscription = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", orderService.name);
    formData.append("email", orderService.email);
    formData.append("service", orderService.service);
    formData.append("description", orderService.description);
    formData.append("price", orderService.price);
    formData.append("status", orderService.status);
    formData.append("image", orderService.image);

    fetch("http://localhost:5000/orderService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin__addevent">
      <h2 style={{textAlign: "center", margin: "0", color: "gray"}}>Order</h2>

      <form onSubmit={handleSubscription}>
        <div style={{display: "flex"}}>
          <div>
            <input
              type="text"
              onChange={hendelBlur}
              name="name"
              value={loggedInUser.name}
              placeholder="Your name/Company's name"
              required
            />

            <input
              type="text"
              onChange={hendelBlur}
              name="service"
              value={serviceDetails.service}
              placeholder="service"
              required
            />
            <br />

            <textarea
              onChange={hendelBlur}
              name="description"
              placeholder="Project Description"
            ></textarea>
          </div>

          <div>
            <input
              onChange={hendelBlur}
              name="email"
              value={loggedInUser.email}
              type="text"
              placeholder="Your email adress"
              required
            />
            <br />
            <input
              onChange={hendelBlur}
              type="number"
              name="price"
              placeholder="Price"
              required
            />
            <input
              onChange={handleImage}
              type="file"
              name="image"
              placeholder="Upload Image"
            />
          </div>
        </div>
        <button
          type="submit"
          style={{background: "transparent", border: "none"}}
        >
          <ButtonLoading onClick={handleSubscription} btnName={"Send"} />
        </button>
      </form>
    </div>
  );
};

export default OrderService;
