import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import "./style.css"
export default function home() {
  return (
    <header>
        {/* Navbar starts */}
        <Nav />
      <h1 className="news" style = {{color : "#5891ff"}}>News Of The Day</h1>
      <div className="container">

        {/*  Sidebar starts here */}
        <div class="container my-5 row mx-auto">
          <div className="col-sm-2">
            <h4>Trending tags</h4>
            <div class="sidebar pt-3" >
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    #covid-19 <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    #techToday
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ends */}
          <div className="col-sm-10">
            <div class="card mt-4">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            <div class="card mt-4">

              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            <div class="card mt-4">

              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </header>
  );
}
