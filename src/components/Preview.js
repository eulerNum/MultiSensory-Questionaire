import React from "react";
import "../styles/Preview.css";

function Preview({ color, shape, texture }) {
  return (
    <div className="preview-container">
      <h3>미리보기</h3>
      <div className="preview-box" style={{ backgroundColor: color }}>
        <img src={shape} alt="Selected Shape" className="shape" />
        <img src={texture} alt="Selected Texture" className="texture" />
      </div>
    </div>
  );
}

export default Preview;
