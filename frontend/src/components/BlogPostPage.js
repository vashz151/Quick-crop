import React from "react";
import { useParams } from "react-router-dom";
import "../css/BlogPostPage.css";
import BlogContent from "./BlogContent";
import authorImage from "../images/author.png";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

function BlogPostPage({ posts }) {
  const { id } = useParams();
  const post = BlogContent.find((post) => post.link === id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="post">
            <img src={post.images[0]} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <div className="post-meta-item post-author">
                <img src={authorImage} alt="Author" />
                {post.author}
              </div>
              <div className="post-meta-item post-date">
                <i className="far fa-calendar-alt"></i>
                <span className="post-date-text">{post.date}</span>
              </div>
              <div className="post-meta-item post-read-time">
                <i className="far fa-clock"></i>
                <span className="post-read-time-text">
                  {post.readTime} read
                </span>
              </div>
            </div>

            <div className="post-content">{post.content}</div>
          </div>
        </div>
        <div className="col-md-4">
          <Sidebar />
          <div>
            <img
              src={post.images[1]}
              alt={post.title}
              className="post-image-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
