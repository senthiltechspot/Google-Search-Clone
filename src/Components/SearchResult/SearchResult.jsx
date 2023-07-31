import React from "react";
import { Link } from "react-router-dom";

function SearchResult({ item }) {
  const heading = item.htmlTitle;
  const displayLink = item.link;
  const image =
    item.pagemap?.cse_image?.[0]?.src ||
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
  const description = item.snippet;
  const url = item.link;

  return (
    <div className="p-3" style={{ maxWidth: "90vw" }}>
      <div
        className="d-flex align-items-center"
        onClick={() => (window.location.href = url)}
        style={{ cursor: "pointer" }}
      >
        <img
          className="m-3"
          src={image}
          height={"30vw"}
          width={"30vw"}
          alt=""
        />

        <div className="d-flex flex-column align-items-start justify-content-start">
          <div
            className="content"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "200px", // Adjust this value based on your design
            }}
            dangerouslySetInnerHTML={{ __html: heading }}
          ></div>
          <Link
            to={`${url}`}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "60vw", // Adjust this value based on your design
            }}
          >
            <h7>{displayLink}</h7>
          </Link>
        </div>
      </div>

      <div className="px-3">
        <p className="fw-bolder">{description}</p>
      </div>

      <hr />
    </div>
  );
}

export default SearchResult;
