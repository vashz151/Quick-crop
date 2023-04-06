import React from "react";
import "../css/BlogPostPage.css";
import BlogContent from "./BlogContent";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Sidebar = () => {
  const { id } = useParams();
  return (
    <div className="sidebar">
      <h3>Recent Posts</h3>
      <ul>
        {BlogContent.filter((post) => post.link !== id)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6)
          .map((post) => (
            <Link
              to={`/blogs/${post.link}`}
              key={post.link}
              className="recent-post"
            >
              <img src={post.images[0]} alt="Recent Post" />
              <div>
                <p className="recent-post-title">{post.title}</p>
                <p className="recent-post-date">{post.date}</p>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
