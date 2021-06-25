import React from "react";
import "./style.css";
import Nav from "./Nav"
import Footer from "./Footer"

export default function login() {
  return (
    <div className="main" style={{margin : "60px"}}>
      <Nav />
      <div className="LOGIN">
        <div className="registration-form ">
          <form>
            <div className="form-icon">
              <span>
                <i className="icon icon-user"></i>
              </span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control item"
                id="password"
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-group remember">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="remember-me"
              />
              <label for="remember-me" className="label-remember-me">
                {" "}
                Remember me
              </label>
            </div>
            <div className="form-group">
              <a href="mainindex.html">
                <button type="button" className="btn btn-block login">
                  Login
                </button>
              </a>
            </div>
            <div>
              <label className="forgot">
                Forgot password ?
                <a href="#" className="forgot-password">
                  {" "}
                  Reset here
                </a>
              </label>
            </div>
            <div>
              <label className="reset">
                New to FTS ?
                <a href="signUpIndex.html" className="signup">
                  {" "}
                  Sign Up here
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>

    </div>
  );
}
