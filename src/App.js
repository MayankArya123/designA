import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaStar } from "react-icons/fa";

import { useState } from "react";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ValidationError, setValidationError] = useState("");

  const submit = () => {
    if (Email.trim().length === 0) {
      return setValidationError("please enter email");
    }

    if (Password.trim().length === 0) {
      return setValidationError("please enter password");
    }

    setValidationError("");
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="first-half">
          <div className="form">
            {ValidationError && (
              <p className="validation-error-message"> {ValidationError} </p>
            )}

            <h2>Welcome back</h2>

            <p>welcome back! Please enter your details</p>

            <label htmlFor="" className="medium">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your mail"
            />

            <label htmlFor="" className="medium">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} type="text" />

            <div className="d-flex justify-content-between">
              <div className="remember-block d-flex">
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
              <FaGoogle className="google-icon" />
              Sign in with Google{" "}
            </button>

            <div className="text-center mt-4">
              <small>
                {" "}
                Don't have an account?{" "}
                <a href="#" className="cursor">
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
                "we have been using untitled to kick start every new project and
                can't imagine working without it."{" "}
              </h5>

              <div className="image-footer-1st-layer d-flex justify-content-between align-items-center">
                <div className="">
                  {" "}
                  <h2>Andie Lane</h2>{" "}
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
                  <p className="image-paragraph">Founder Catalogue</p>{" "}
                  <p className="image-paragraph"> Web Design Agency</p>{" "}
                </div>
                <div className="signs d-flex justify-content-between align-items-center">
                  {" "}
                  <div className="prev"> prev </div>
                  <div className="next">next</div>{" "}
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
