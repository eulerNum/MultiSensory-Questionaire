import React, { useState } from "react";
//import Preview from "./Preview";
import "../styles/SelectImage.css"; // 스타일 적용

// 이미지 파일 경로 (shapes: 10개, textures: 30개)
const shapes = Array.from({ length: 40 }, (_, i) => `/assets/shapes/shape_${i + 1}.png`);
const textures = Array.from({ length: 27 }, (_, i) => `/assets/textures/texture_${i + 1}.jpg`);

function SelectImage() {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [selectedShape, setSelectedShape] = useState(shapes[0]);
  const [selectedTexture, setSelectedTexture] = useState(textures[0]);

  return (
    <div className="select-image-container">
      <h2>시료를 맛보고 느껴지는 색상 및 이미지를 선택해주세요</h2>

      {/* 1. 색상 선택 */}
      <div className="select-image-color-picker">
        <h3>1. 색상 선택</h3>
        <input 
          type="color" 
          value={selectedColor} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
      </div>

      {/* 2. 모양 선택 */}
      <div className="select-image-section">
        <h3>2. 모양 선택</h3>
        <div className="select-image-grid">
          {shapes.map((shape, index) => (
            <img
              key={index}
              src={shape}
              alt={`Shape ${index + 1}`}
              className={selectedShape === shape ? "selected" : ""}
              onClick={() => setSelectedShape(shape)}
            />
          ))}
        </div>
      </div>

      {/* 3. 텍스처 선택 */}
      <div className="select-image-section">
        <h3>3. 질감 선택</h3>
        <div className="select-image-grid">
          {textures.map((texture, index) => (
            <img
              key={index}
              src={texture}
              alt={`Texture ${index + 1}`}
              className={selectedTexture === texture ? "selected" : ""}
              onClick={() => setSelectedTexture(texture)}
            />
          ))}
        </div>
      </div>

      {/* 미리보기 */}
      {/*<Preview color={selectedColor} shape={selectedShape} texture={selectedTexture} />*/}
    </div>
  );
}

export default SelectImage;
