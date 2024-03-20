import React from "react";

function ArticleItem({ article }) {
  return (
    <li className="article-item">
      <div className="article-content">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-summary">{article.summary}</p>
        <a href={article.url} className="article-link">
          Read more
        </a>
      </div>
      {article.image_url && (
        <div className="article-image">
          <img src={article.image_url} alt={article.title} />
        </div>
      )}
    </li>
  );
}

export default ArticleItem;
