import React from "react";

const NewsItem = (props) => {
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
        style={{ height: "30vh", objectFit: "cover" }}
        src={
          !image_url
            ? "https://media.istockphoto.com/photos/global-earth-rotating-digital-world-breaking-news-studio-background-picture-id1216529550?k=20&m=1216529550&s=170667a&w=0&h=vlm1s_XD56th2OSbMPVtO0saY78yXT-MZJYsqvAiJk4="
            : image_url
        }
        className="card-img-top"
        alt=""
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-truncate" style={{ overflow: "hidden"}}>
          {description}
        </p>
        <a
          rel="noreferrer"
          href={link}
          target={"_blank"}
          className="btn btn-primary mt-auto"
          style={{ borderRadius: "0.4rem"}}  
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
