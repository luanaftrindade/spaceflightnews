import React from "react";
import ArticleItem from "./ArticleItem";
import "../styles/articleslist.css";

function ArticlesList({ data }) {
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
