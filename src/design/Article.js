import React from "react";

export default function Article({ val }) {
  return (
    <>
      <div class="card mt-4">
        <div class="row no-gutters">
          <div class="col-md-4 image">
            <img src={val.urlToImage} alt="..." className="img-fluid" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a href={val.url} target="_blank" rel="noopener noreferrer">
                <h5 class="card-title">{val.title}</h5>
              </a>{" "}
              {/* target="_blank" rel="noopener noreferrer" to open the link in a new tab */}
              <p class="card-text">{val.content}</p>
              <small>{val.author}</small>
              <p class="card-text">
                <small class="text-muted">
                  Published on {val.source.name} at {val.publishedAt}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
