// user - object that stores user userData
// to print user write this <p>You are: {JSON.stringify(user)}</p>
// onLogoutClick - logs out user

import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Nav extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <nav
        class="navbar .p-0"
        style={{ position: "fixed", top: 0, width: "100vw", zIndex: 10 }}
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ padding: 0 }}
        >
          <span class="navbar-toggler-icon"></span>
          <a href="/"> FTS News </a>
          {/* Uncomment below to print user data stored in redux */}
          {/* <p>You are: {JSON.stringify(user)}</p> */}
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ padding: 0 }}
        ></button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/company/fts-failure-to-success/mycompany/"
          >
            FTS
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Nav);
