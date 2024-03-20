import React from "react";
import "../styles/titleSection.css";

export function TitleSection({title}) {
  return (
    <div className="titleSectionDiv">
      <h1 className="titleSectionText">{title}</h1>
    </div>
  );
}
