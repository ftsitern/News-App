import React from "react";
import "./style.css";
import Footer from "./Footer";
import Nav from "./Nav";
export default function login() {
  return (
    <div class="main" style={{ margin: "73px" }}>
      <Nav />
      <div class="registration-form">
        <form>
          <div class="form-icon">
            <span>
              <i class="icon icon-user"></i>
            </span>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="username"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="phone-number"
              placeholder="Phone Number"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="phone-number"
              placeholder="School / College Name"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control item"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control item"
              id="re_password"
              placeholder="Re-enter your Password"
            />
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              name="agree-term"
              id="agree-term"
              class="agree-term"
            />
            <label for="agree-term" class="label-agree-term">
              I agree all statements in{" "}
              <a href="#" class="term-service">
                Terms of service
              </a>
            </label>
          </div>
          <div class="form-group">
            <a href="mainindex.html">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block create-account"
              >
                Create Account
              </button>
            </a>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
