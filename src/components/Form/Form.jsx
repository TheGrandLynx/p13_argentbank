import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginSuccess } from "../../redux/actions/auth.actions.js";
import { isValidEmail, isValidPassword } from "../../Utils/inputValidation.js";

function Form() {
  //soutenance 4
  //if the remember me checkbox is checked we prefill the fields with the data of the local store
  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") ? localStorage.getItem("userEmail") : ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("userPassword")
      ? localStorage.getItem("userPassword")
      : ""
  );
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberMe")
      ? localStorage.getItem("rememberMe")
      : false
  );
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (event, wEmail) => {
    if (!isValidEmail(wEmail)) {
      setErrorMessage("Invalid email adress");
    } else {
      setErrorMessage("");
    }
    setEmail(wEmail);
  };
  const handlePassword = (event, wPassword) => {
    if (!isValidPassword(wPassword)) {
      setErrorMessage("Invalid password");
    } else {
      setErrorMessage("");
    }
    setPassword(wPassword);
  };

  const handleCheck = (event, wCheck) => {
    if (wCheck) {
      localStorage.setItem("rememberMe", event.target.checked);
    } else {
      localStorage.clear();
    }
    setRememberMe(wCheck);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      //check if the qyery response is retrieved
      if (response.ok) {
        setErrorMessage("");
        const data = await response.json();
        const token = data.body.token;
        dispatch(loginSuccess(token));
        sessionStorage.setItem("token", token);
        if (rememberMe) {
          localStorage.setItem("token", token);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userPassword", password);
        }
        navigate("/profile");
      } else {
        const error = "Incorrect email/password";
        dispatch(loginFailed(error));
        setErrorMessage("Email ou password incorrect !");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {});
  return (
    <section className="sign-in-content">
      <i className="fa-solid fa-circle-user"></i>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={email}
            onChange={(event) => handleEmail(event, event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => handlePassword(event, event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => handleCheck(event, event.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Form;
