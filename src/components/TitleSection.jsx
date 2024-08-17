import React, { useEffect, useState } from "react";
import "../styles/titleSection.css";

export function TitleSection({ title }) {
  // implementing - Title Section disappears when it touches or overlaps the NavBar
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const titleSection = document.querySelector(".titleSectionText");
      const navBar = document.querySelector(".navBar");

      // checking if the title section has reached the navbar
      if (titleSection && navBar) {
        const titleTop = titleSection.getBoundingClientRect().top;
        const navBottom = navBar.getBoundingClientRect().bottom;

        console.log("Title Top:", titleTop, "Nav Bottom:", navBottom);

        if (titleTop <= navBottom) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };


    // initial check in case the title is initially in view
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`titleSectionDiv ${!isVisible ? "hidden" : ""}`}>
      <h1 className="titleSectionText">{title}</h1>
    </div>
  );
}
