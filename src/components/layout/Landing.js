import React, { Component } from "react";
import { logoutUser } from "../../actions/authActions";


class Landing extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>FTS</b> New App{" "}
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Browse News Here
            </p>
            <br />
            <div className="col s6">
              <a
                href="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </a>
            </div>
            <div className="col s6">
              <a
                href="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
