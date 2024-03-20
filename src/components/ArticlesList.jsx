import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import "../styles/articleslist.css";
import apiService from "../service/data";

function ArticlesList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const pageRange = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const articles = await apiService.getArticles();
      const startIndex = (currentPage - 1) * itemsPerPage;
      const slicedData = articles.results.slice(
        startIndex,
        startIndex + itemsPerPage
      );
      setData(slicedData);
      setTotalPages(Math.ceil(articles.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="articles-container">
      <ul className="articles-list">
        {data.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
