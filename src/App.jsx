import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import ArticlesList from "./components/ArticlesList";
import Pagination from "./components/Pagination";
import { TitleSection } from "./components/TitleSection";
import BlogList from "./components/BlogList";
import "./styles/App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route
              path="/news"
              element={
                <>
                  <div className="app" id={theme}>
                    <ThemeToggle />
                    <TitleSection title={"SpaceFligt News"} />
                    <ArticlesList currentPage={currentPage} />
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      handlePageChange={handlePageChange}
                      pageRange={10}
                    />
                  </div>{" "}
                </>
              }
            ></Route>
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
            <Route
              path="/articles"
              element={
                <div>
                  <TitleSection title={"Articles"}></TitleSection>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
