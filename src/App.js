import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GoogleIcon from "./Images/google-icon.png";

import { useState } from "react";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ValidationError, setValidationError] = useState("");

  const submit = () => {
    if (Email.trim().length === 0) {
      return setValidationError("please enter email");
    }

    if (!isEmail(Email)) {
      return setValidationError("email is invalid");
    }

    if (Password.trim().length === 0) {
      return setValidationError("please enter password");
    }

    setValidationError("");
  };

  function isEmail(email) {
    // Regular Expression (Not accepts second @ symbol
    // before the @gmail.com and accepts everything else)
    var regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
  }

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="first-half">
          <div className="form">
            {ValidationError && (
              <p className="validation-error-message"> {ValidationError} </p>
            )}

            <h2 className="welcome-heading">Welcome back</h2>

            <p className="para">welcome back! Please enter your details.</p>

            <label htmlFor="" className="medium">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="input"
            />

            <label htmlFor="" className="medium mt-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input"
            />

            <div className="d-flex justify-content-between links-block align-items-center">
              <div className="remember-block d-flex align-items-center">
                {" "}
                <input className="checkbox" type="checkbox" />{" "}
                <small className="remember-text medium-bold">
                  {" "}
                  Remember for 30 days{" "}
                </small>{" "}
              </div>
              <div className="forgot-password-link">
                {" "}
                <small className="medium-bold d-flex cursor">
                  {" "}
                  Forgot password{" "}
                </small>{" "}
              </div>
            </div>

            <button className="sign-in-button" onClick={() => submit()}>
              {" "}
              Sign in{" "}
            </button>
            <button className="sign-in-google-button d-flex align-items-center justify-content-center">
              <img className="google-icon" src={GoogleIcon} alt="" />
              <p> Sign in with Google </p>{" "}
            </button>

            <div className="text-center mt-4">
              <small>
                {" "}
                <small className="info-text">
                  {" "}
                  Don't have an account?{" "}
                </small>{" "}
                <a href="#" className="cursor sign-up-link">
                  {" "}
                  Sign up for free{" "}
                </a>{" "}
              </small>
            </div>
          </div>
        </div>

        <div className="second-half">
          <div className="image-box">
            <div className="image-card">
              <h5>
                {" "}
                "we've been using Untitled to kick start every new project and
                can't imagine working without it."{" "}
              </h5>

              <div className="image-footer-1st-layer d-flex justify-content-between align-items-center">
                <div className="">
                  {" "}
                  <h2 className="image-card-h2">Andi Lane</h2>{" "}
                </div>
                <div className="stars">
                  <div className="star">
                    {" "}
                    <FaStar className="star" />{" "}
                  </div>
                  <div className="star">
                    {" "}
                    <FaStar className="star" />{" "}
                  </div>
                  <div className="star">
                    {" "}
                    <FaStar className="star" />{" "}
                  </div>
                  <div className="star">
                    {" "}
                    <FaStar className="star" />{" "}
                  </div>
                  <div className="star">
                    {" "}
                    <FaStar className="star" />{" "}
                  </div>
                </div>
              </div>

              <div className="image-footer-2nd-layer d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  {" "}
                  <p className="image-paragraph normal">
                    Founder , Catalog
                  </p>{" "}
                  <p className="image-paragraph p2"> Web Design Agency</p>{" "}
                </div>
                <div className="signs d-flex justify-content-between align-items-center">
                  {" "}
                  <div className="prev">
                    {" "}
                    <FaArrowLeft />{" "}
                  </div>
                  <div className="next">
                    {" "}
                    <FaArrowRight />{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
