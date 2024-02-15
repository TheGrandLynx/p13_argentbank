import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstname,
  updateLastname,
} from "../../redux/actions/user.actions.js";
import { isValidName } from "../../Utils/inputValidation.js";

function User() {
  let token = useSelector((state) => state.auth.token);
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  let userData = useSelector((state) => state.user.userData);
  if (!(Object.keys(userData).length === 0)) {
    console.log(userData);
    sessionStorage.setItem("userData", JSON.stringify(userData));
  } else if (sessionStorage.length > 1) {
    userData = JSON.parse(sessionStorage.getItem("userData"));
  }
  const [display, setDisplay] = useState(true);
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!isValidName(userFirstname || userLastname)) {
      setErrorMessage("Invalid username");
      return;
    } else {
      setErrorMessage("");
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName: userFirstname,
            lastName: userLastname,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const firstname = data.body.firstName;
        const lastname = data.body.lastName;
        dispatch(updateFirstname(firstname));
        dispatch(updateLastname(lastname));
        setDisplay(!display);
        window.location.reload();
      } else {
        console.log("Invalid Fields");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="userHeader">
      {display ? (
        <div>
          <h2>
            Welcome back
            <br />
            {userData.firstname} {userData.lastname} !
          </h2>
          <button
            className="userHeader__editButton"
            onClick={() => setDisplay(!display)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <h2>Edit user info</h2>
          <form>
            <div className="userHeader__editInput">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                defaultValue={userData.firstname}
                onChange={(event) => setUserFirstname(event.target.value)}
              />
            </div>
            <div className="userHeader__editInput">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                defaultValue={userData.lastname}
                onChange={(event) => setUserLastname(event.target.value)}
              />
            </div>
            <div className="buttons">
              <button
                className="edit-username-button"
                onClick={handleSubmitUsername}
              >
                Save
              </button>
              <button
                className="edit-username-button"
                onClick={() => setDisplay(!display)}
              >
                Cancel
              </button>
            </div>
            {errorMessage && (
              <p className="userHeader__ErrorMessage">{errorMessage}</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default User;
