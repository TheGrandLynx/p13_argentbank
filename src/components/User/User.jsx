import React from "react";

function User({ firstname, lastname }) {
  return (
    <div className="userHeader">
      <h2>
        Welcome back
        <br />
        {firstname} {lastname} !
      </h2>
      <button className="userHeader__editButton">Edit Name</button>
    </div>
  );
}

export default User;
