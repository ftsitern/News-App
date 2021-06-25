import React from "react";
import "./style.css";

export default function login() {
  return (
    <div class="container-fluid my-4">
      <div class="row">
        <div class="col-md-5 mx-auto" style={{margin:"75px 0px 0px 0px"}}>
          <div>
            <div>
              <div class="row">
                <div class="col">
                  <center>
                    <img width="100px" src="generaluser.png"/>
                  </center>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <center>
                    <h4 >Your Profile</h4>
                    <span class="font-weight-bold">Account Status: STUDENT</span>
                    <span><i class="icon icon-user"></i></span>
                  </center>
                </div>
              </div>
              <form>
                <div class="form-group">
                  <label for="inputAddress">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Sourav Prasad Das"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="sourav143@gmail.com"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Contact No.</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="9867272723"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Position Responsibilty</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Asst. Professor"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress">School / College Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Veer Surendra Sai University of Technology, Burla"
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // Bookmarks
    
  )}