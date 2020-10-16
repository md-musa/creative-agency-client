import {Button} from "@material-ui/core";
import React, {useState} from "react";
import ButtonLoading from "../../AllHomePageComponent/ButtonLoading/ButtonLoading";

const MakeAdmin = () => {
  const [addNewAdmin, setAddNewAdmin] = useState({
    email: "",
  });

  const handleBlur = (e) => {
    const newAddNewAdmin = {...addNewAdmin};
    newAddNewAdmin[e.target.name] = e.target.value;
    setAddNewAdmin(newAddNewAdmin);
  };
  // -------------Make new Admin---------------
  const handleAddNewAdmin = (e) => {
    fetch("http://localhost:5000/addNewAdmin", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(addNewAdmin),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div className="admin__addevent">
      <h2 style={{textAlign: "center", margin: "0"}}>Make new admin</h2>

      <form onSubmit={handleAddNewAdmin}>
        <div style={{display: "flex"}}>
          <div>
            <span>Add new admin</span>
            <br />
            <input
              type="text"
              onChange={handleBlur}
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          style={{background: "transparent", border: "none"}}
        >
          <ButtonLoading btnName={"ADD"} />
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
