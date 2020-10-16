import React, {useContext, useState} from "react";
import {UserDataContext} from "../../../App";
import ButtonLoading from "../../AllHomePageComponent/ButtonLoading/ButtonLoading";
// ---------------Add review form admin panel---------------
const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);

  const [review, setReview] = useState({
    name: loggedInUser.name,
    profilePicture: loggedInUser.profile,
    companyName: "",
    description: "",
  });

  const handleBlur = (e) => {
    const newReview = {...review};
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleReview = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin__addevent">
      <h2 style={{textAlign: "center", margin: "0", color: "gray"}}>
        Review us
      </h2>

      <form onSubmit={handleReview}>
        <div>
          <input
            type="text"
            onChange={handleBlur}
            name="name"
            value={loggedInUser.name}
            placeholder="Your name"
            required
          />
          <br />

          <input
            type="text"
            onChange={handleBlur}
            name="companyName"
            placeholder="Company name"
          />
          <br />

          <textarea
            onChange={handleBlur}
            name="description"
            placeholder="Description"
          ></textarea>
        </div>
        <button
          type="submit"
          style={{background: "transparent", border: "none"}}
        >
          <ButtonLoading btnName={"Send"} />
        </button>
      </form>
    </div>
  );
};

export default Review;
