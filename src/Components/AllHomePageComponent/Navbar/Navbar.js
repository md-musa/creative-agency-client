import React, {useContext} from "react";
import "./Navbar.css";
import {UserDataContext} from "../../../App";
import {Link} from "react-router-dom";
import {Avatar, Button} from "@material-ui/core";
import logo from "../../../images/logos/logo.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  return (
    <nav className="navbar  navbar-expand-lg navbar-custom ">
      <Link to="/">
        <img height="50px" src={logo}></img>
      </Link>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        style={{background: "white"}}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item margin">
            <Link style={{textDecoration: "none", color: "black"}} to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item margin">Our Portfolio</li>
          <li className="navbar-item margin">Our Team</li>
          <li className="navbar-item margin">Contact us</li>

          <li className="navbar-item">
            {loggedInUser.name ? (
              <Button>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Avatar
                    style={{border: "solid 3px #6aa1ff"}}
                    src={loggedInUser.profile && loggedInUser.profile}
                  />
                  <span style={{color: "gray"}}>{loggedInUser.name}</span>
                </div>
              </Button>
            ) : (
              <Link to="/login" style={{textDecoration: "none"}}>
                <Button
                  variant="contained"
                  color="primary"
                  className="header__loginBtn"
                >
                  Register
                </Button>{" "}
              </Link>
            )}
          </li>
          <li>
            <Link to="/admin" style={{textDecoration: "none"}}>
              <Button
                variant="contained"
                color="primary"
                className="header__loginBtn"
              >
                Admin
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="header" style={{zIndex: "100"}}>
//       <div className="header__logo">
//         <Link to="/">
//           <img src={logo}></img>
//         </Link>
//       </div>
//       <div>
//         <input
//           className="header__search"
//           type="text"
//           placeholder="search anything"
//         ></input>
//       </div>

//       <Link to="/" style={{textDecoration: "none"}}>
//         <div>
//           <Button style={{padding: "0px 34px"}} color="primary">
//             <h6>Home</h6>
//           </Button>
//         </div>
//       </Link>

//       <div>
//         <Button style={{padding: "0px 34px"}} color="primary">
//           <h6>Out Portfolio</h6>
//         </Button>
//       </div>

//       <Link to="/admin" style={{textDecoration: "none"}}>
//         <div>
//           <Button style={{padding: "0px 34px"}} color="primary">
//             <h6>Our Team</h6>
//           </Button>
//         </div>
//       </Link>

//       <div>
//         <Button style={{padding: "0px 34px"}} color="primary">
//           <h6>Contact us</h6>
//         </Button>
//       </div>

//       <div>
//         {/* ---------Registation to volunteer----------- */}

//         <h6>
//           {loggedInUser.name ? (
//             <Button>
//               <div style={{display: "flex", alignItems: "center"}}>
//                 <Avatar
//                   style={{border: "solid 3px #6aa1ff"}}
//                   src={loggedInUser.profile && loggedInUser.profile}
//                 />
//                 <span style={{padding: "8px", color: "gray"}}>
//                   {loggedInUser.name}
//                 </span>
//               </div>
//             </Button>
//           ) : (
//             <Link to="/login" style={{textDecoration: "none"}}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="header__loginBtn"
//               >
//                 Register
//               </Button>{" "}
//             </Link>
//           )}
//         </h6>
//       </div>

//       <div>
//         {/* ---------Log in as a admin----------- */}
//         <h6>
//           {loggedInUser.name ? (
//             ""
//           ) : (
//             <Link to="/admin" style={{textDecoration: "none"}}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="header__loginBtn"
//               >
//                 Admin
//               </Button>
//             </Link>
//           )}
//         </h6>
//       </div>
//     </div>
