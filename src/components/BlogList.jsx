import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import "../styles/blogs.css";
import apiService from "../service/data";

function BlogList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const blogs = await apiService.getBlogs();
      setData(blogs.results);
      console.log(data);
    } catch (error) {
      console.error("Error fetching blogs inside BlogList Component:", error);
    }
  };

  return (
    <div className="blogs-container">
      <ul className="blogs-list">
        {data.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
