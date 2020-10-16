import {Avatar} from "@material-ui/core";
import React, {useContext} from "react";
import "./Services.css";
import {ServiceDetailsToForm} from "../../../App";
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";

// -----------React spring animation properties-------------
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// ---------Services card -----------------
const Services = (serviceData) => {
  const [serviceDetails, setServiceDetails] = useContext(ServiceDetailsToForm);
  const {service, description, image} = serviceData.serviceDetails;

  // -----react spring animation properties----------
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {mass: 3, tension: 400, friction: 40},
  }));

  return (
    <div className="col-sm-9 col-md-3 col-lg-3">
      <animated.div
        class="card"
        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
        onMouseLeave={() => set({xys: [0, 0, 1]})}
        style={{transform: props.xys.interpolate(trans)}}
      >
        <div
          className=" services-card"
          onClick={() => setServiceDetails({service: service, image: image})}
        >
          <Link style={{textDecoration: "none", color: "gray"}} to="/admin">
            <div className="d-flex align-item-center justify-content-center">
              <div>
                <Avatar
                  style={{margin: "auto"}}
                  src={`data:image\png;base64,${image.img}`}
                />
                <h6>{service}</h6>
                <span className="color-gray">{description}</span>
              </div>
            </div>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Services;
