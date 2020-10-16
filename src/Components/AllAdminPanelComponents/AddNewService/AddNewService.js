import React, {useState} from "react";
import ButtonLoading from "../../AllHomePageComponent/ButtonLoading/ButtonLoading";
import "./AddNewService.css";

// --------Add new service form Admin panel ---------------
const AddNewService = () => {
  const [newService, setNewService] = useState({
    service: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const hendelBlur = (e) => {
    const temNewService = {...newService};
    temNewService[e.target.name] = e.target.value;
    setNewService(temNewService);
  };

  const handleImage = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleAddNewService = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("service", newService.service);
    formData.append("description", newService.description);

    fetch("http://localhost:5000/addNewService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin__addevent">
      <h2 style={{textAlign: "center", margin: "0"}}>Add New Event</h2>

      <form onSubmit={handleAddNewService}>
        <div style={{display: "flex"}}>
          <div>
            <span>Service title</span>
            <br />
            <input
              type="text"
              onChange={hendelBlur}
              name="service"
              placeholder="Service"
              required
            />
            <br />
            <span>Description</span>
            <br />
            <textarea
              onChange={hendelBlur}
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div>
            <span>Upload file</span>
            <br />
            <input
              onChange={handleImage}
              type="file"
              name="file"
              placeholder="upload file"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          style={{background: "transparent", border: "none"}}
        >
          <ButtonLoading btnName={"Add Service"} />
        </button>
      </form>
    </div>
  );
};

export default AddNewService;
