import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import the NavBar component
import ThemeToggle from "./components/ThemeToggle";
import ArticlesList from "./components/ArticlesList";
import Pagination from "./components/Pagination";
import { TitleSection } from "./components/TitleSection";
import BlogList from "./components/BlogList";
import apiService from "./service/data";
import "./styles/App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const fetchData = async (page = 1) => {
    try {
      const articles = await apiService.getArticles(page, postsPerPage);
      setData(articles.results || []);
      setTotalArticles(articles.count || 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage); // fetching for the current page

    //scroll to top when the page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`} id={theme}>
        <Router>
          <NavBar />
          <ThemeToggle />
          <div>
            <Routes>
              <Route
                path="/news"
                element={
                  <>
                    <TitleSection title={"SpaceFlight News"} />
                    <ArticlesList data={data} />
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalArticles={totalArticles}
                      handlePagination={handlePageChange}
                      currentPage={currentPage}
                    />
                  </>
                }
              />
              <Route
                path="/blogs"
                element={
                  <div>
                    <ThemeToggle />
                    <TitleSection title={"Blogs"} />
                    <BlogList currentPage={currentPage}></BlogList>
                  </div>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
