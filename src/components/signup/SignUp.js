import React, { useEffect } from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const captureData = () => {
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((response) => {
        console.log(response);
        if (response) {
          localStorage.setItem(
            "user",
            JSON.stringify({ name, email, password })
          );
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">SignUp</span>
            <form>
              <div className="input-field">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <i className="uil uil-envelope icon" />
              </div>
              <div className="input-field">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope icon" />
              </div>
              <div className="input-field">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock icon" />
                <i className="uil uil-eye-slash showHidePw" />
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text">
                  Forgot password?
                </a>
              </div>
              <div className="input-field button">
                <input
                  onClick={captureData}
                  type="button"
                  defaultValue="Sign Up"
                />
              </div>
            </form>
            <div className="login-signup">
              <span className="text">
                Already a member?
                <a className="text signup-link">
                  {" "}
                  <Link to="/login">Login now</Link>{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
