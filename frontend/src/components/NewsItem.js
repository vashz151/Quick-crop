import React from "react";
const NewsItem = (props) => {
  const image ="https://images.hindustantimes.com/img/2022/09/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1663372914274_1663372914274.jpeg";
  let { title, link, description, image_url, source_id, creator, pubDate } =
    props;
  return (
    <div className="card h-100">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
          fontSize: "1.3rem",
          textEmphasis: "bold",
        }}
      >
        <span className="badge rounded-pill bg-info text-dark">
          {source_id}
        </span>
      </div>
      <img
        style={{
          height: "30vh",
          width: "100%",
          objectFit: "cover",
          border: "3px solid black",
        }}
        src={image_url ? image_url : image}
        onError={(e) => {
          e.target.src = image;
        }}
        className="card-img-top"
        alt="breaking news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-truncate" style={{ overflow: "hidden" }}>
          {description}
        </p>
        <a
          rel="noreferrer"
          href={link}
          target={"_blank"}
          className="btn btn-secondary active btn-lg  mt-auto"
          style={{ borderRadius: "0.4rem" }}
        >
          Read More
        </a>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          By {!creator ? "Unknown" : creator} on{" "}
          {new Date(pubDate).toGMTString()}
        </small>
      </div>
    </div>
  );
};
export default NewsItem;
