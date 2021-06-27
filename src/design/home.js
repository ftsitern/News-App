import React, { useState, useEffect } from "react";
import Article from "./Article";
import "./style.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    const getNews = async () => {
      try {
        if (query !== "") {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=1c59fcd193184e74b48186679ecd6dad`
          );
          const data = await response.json();
          setNews(data.articles);
          console.log(data.articles);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, [query]);

  return (
    <header>
      <h1 className="news" style={{ color: "#5891ff" }}>
        News Of The Day
      </h1>
      <form style={{ padding: 0, display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          class="btn"
          style={{ backgroundColor: "#5891FF" }}
        >
          Search
        </button>
      </form>
      <div className="container">
        {/*  Sidebar starts here */}
        <div class="container my-5 row mx-auto">
          <div className="col-sm-2">
            <h4>Trending tags</h4>
            <div class="sidebar pt-3">
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
            {news.map((val) => (
              <Article val={val} key={val.url}/>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
