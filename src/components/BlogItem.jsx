import React from "react";

function BlogItem({ blog }) {
  return (
    <li className="blog-item">
      <div className="blog-content">
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-summary">{blog.summary}</p>
        <a href={blog.url} className="blog-link">
          Read more
        </a>
      </div>
      {blog.image_url && (
        <div className="blog-image">
          <img src={blog.image_url} alt={blog.title} />
        </div>
      )}
    </li>
  );
}

export default BlogItem;
