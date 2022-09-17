import React from "react";

const NewsItem = (props) => {
  let { title, link, description, image_url, source_id, creator,pubDate } =
    props;
  return (
    <div className="my-3">
        <div className="card h-100">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-info text-dark">
              {source_id}
            </span>
          </div>
          <img style={{height: '25vh' ,objectFit:'cover'}}
            src={
              !image_url
                ? "https://previews.123rf.com/images/njwatchara/njwatchara2004/njwatchara200400010/143765255-global-earth-rotating-digital-world-breaking-news-studio-background-for-news-report-and-breaking-new.jpg"
                : image_url
            }
            className="card-img-top" 
            alt=""
          />
          <div className="card-body h-100"  >
            <h5 className="card-title h-100 text-truncate" >{title}</h5>
            <p className="card-text h-100 text-truncate" style={{overflow:"hidden"}} >{description}</p>
            <a
              rel="noreferrer"
              href={link}
              target={"_blank"}
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
          <div className="card-footer">
              <small className="text-muted">
                By {!creator ? "Unknown" : creator} on {new Date(pubDate).toGMTString()}
              </small>
          </div>
        </div>
      </div>
  );
};
export default NewsItem;
