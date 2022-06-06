import React from "react";
import "./testpage.css";

const TestPage = () => {
  return (
    <div>
      <div>
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>

        <form>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
