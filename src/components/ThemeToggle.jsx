import { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="react-switch">
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      <label className="theme">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  );
}

export default ThemeToggle;
