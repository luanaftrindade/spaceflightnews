import React from "react";
import "../styles/pagination.css";

function Pagination({ postsPerPage, totalArticles, handlePagination, currentPage }) {
  const totalPages = Math.ceil(totalArticles / postsPerPage);
  const paginationNumbers = [];
  const displayButtons = 10;

  // calculate the starting and ending page numbers
  let startPage = Math.max(currentPage - Math.floor(displayButtons / 2), 1);
  let endPage = Math.min(startPage + displayButtons - 1, totalPages);

  // adjust startPage if endPage is less than the number of buttons we want to display
  if (endPage - startPage < displayButtons - 1) {
    startPage = Math.max(endPage - displayButtons + 1, 1);
  }

  // generate page numbers for buttons
  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <button
          aria-label={`Go to Page ${pageNumber}`}
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
