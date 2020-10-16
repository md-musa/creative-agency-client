import {CircularProgress} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import "./AllRegisteredServices.css";

const AllRegisteredServices = () => {
  const [changeStatus, setChangeStatus] = useState({});
  const [realTimePageUp, setRealTimePageUp] = useState();
  const [
    allClientRegisteredServices,
    setAllClientRegisteredServices,
  ] = useState([]);

  // ---------fetching all orders collection------------
  useEffect(() => {
    fetch("http://localhost:5000/allRegisteredServices")
      .then((res) => res.json())
      .then((data) => {
        setAllClientRegisteredServices(data);
      })
      .catch((err) => console.log(err));
  }, [realTimePageUp]);

  // ----Change Projects Status form dropdown menu-------------
  const handleChange = (e) => {
    setChangeStatus({status: e.target.value});
  };

  // ---------Update status--------------------
  const handleStatusUpDate = (id) => {
    const data = {id: id, changedStatus: changeStatus.status};
    if (changeStatus.status) {
      fetch(`http://localhost:5000/updateStatus`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setRealTimePageUp(data);
        });
    }
  };

  return (
    <div className="admin__registeredVol">
      <h2 style={{margin: "10px 0", color: "gray", textAlign: "center"}}>
        Services List
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Projects Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <div className="loadingPosition">
            {/* --------loading progress----------- */}
            {allClientRegisteredServices.length === 0 && <CircularProgress />}
          </div>

          {allClientRegisteredServices.map((item) => (
            <tr>
              <td data-column="First Name">{item.name}</td>
              <td data-column="Last Name">{item.email}</td>
              <td data-column="Job Title">{item.service}</td>
              <td data-column="Twitter">{item.description}</td>

              <td data-column="Twitter">
                {item.status == "Done" && (
                  <select
                    onBlur={() => handleStatusUpDate(item._id)}
                    onChange={handleChange}
                    name="status"
                    id="cars"
                    className="btn-done"
                  >
                    <option value={item.status}>{item.status}</option>
                    <option value="Pendding">Pendding</option>
                    <option value="Ongoing">On Going</option>
                    <option value="Done">Done</option>
                  </select>
                )}
                {item.status == "Ongoing" && (
                  <select
                    onBlur={() => handleStatusUpDate(item._id)}
                    onChange={handleChange}
                    name="status"
                    id="cars"
                    className="btn-ongoing"
                  >
                    <option value={item.status}>{item.status}</option>
                    <option value="Pendding">Pendding</option>
                    <option value="Ongoing">On Going</option>
                    <option value="Done">Done</option>
                  </select>
                )}
                {item.status == "Pendding" && (
                  <select
                    onBlur={() => handleStatusUpDate(item._id)}
                    onChange={handleChange}
                    name="status"
                    id="cars"
                    className="btn-pendding"
                  >
                    <option value={item.status}>{item.status}</option>
                    <option value="Pendding">Pendding</option>
                    <option value="Ongoing">On Going</option>
                    <option value="Done">Done</option>
                  </select>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRegisteredServices;
