import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card"  >
          <div className="container" style={{ display: "flex", justifyContent: "flex-end" ,position: "absolute" , right: "0"}}><span
            className="badge rounded-pill bg-danger"
           
          >
            {source}
          </span></div>
          <img
            src={
              !ImageUrl
                ? "https://hodinkee.imgix.net/uploads/images/04170225-78a0-48cc-8349-c46fe6a3ecde/16x9forHSite.png?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=1200&h=630&fit=crop"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                <b>by </b>
                {!author ? "Unknown" : author} <b>on</b>{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
