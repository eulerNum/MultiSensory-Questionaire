import React, { useState } from "react";
import ThreeDViewer from "./ThreeDViewer"; // ✅ Three.js 렌더링 컴포넌트 추가
import "../styles/Select3D.css";

// 3D 모형 데이터 (glb 파일 사용)
const shapes3D = [
  { id: 1, name: "소라껍질", model: "/assets/3d/JunoniaShell.glb" },
  { id: 2, name: "루빅큐브", model: "/assets/3d/rubiks_cube.glb" },
  { id: 3, name: "Torus", model: "/assets/3d/torus.glb" },
];

function Select3D() {
  const [selectedColor, setSelectedColor] = useState("#ff0000"); // 색상 선택
  const [selectedModel, setSelectedModel] = useState(shapes3D[0]); // 3D 모형 선택
  const [roughness, setRoughness] = useState(0.5); // 거칠기 조절
  const [glossiness, setGlossiness] = useState(0.5); // 광택 조절

  return (
    <div className="select-3d-container">
      <h2>시료를 맛보고 느껴지는 3D 형태를 선택해주세요</h2>

      {/* 1. 색상 선택 */}
      <div className="select-3d-color-picker">
        <h3>1. 색상 선택</h3>
        <input 
          type="color" 
          value={selectedColor} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
      </div>

      {/* 2. 3D 모형 선택 */}
      <div className="select-3d-section">
        <h3>2. 3D 모형 선택</h3>
        <div className="select-3d-grid">
          {shapes3D.map((shape) => (
            <div
              key={shape.id}
              className={`select-3d-item ${selectedModel.id === shape.id ? "selected" : ""}`}
              onClick={() => setSelectedModel(shape)}
            >
              <p>{shape.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 텍스처 조절 */}
      <div className="select-3d-texture-controls">
        <h3>3. 텍스처 조절</h3>
        <label>
          거칠기 (Roughness): {roughness}
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={roughness} 
            onChange={(e) => setRoughness(parseFloat(e.target.value))} 
          />
        </label>
        <label>
          광택 (Glossiness): {glossiness}
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={glossiness} 
            onChange={(e) => setGlossiness(parseFloat(e.target.value))} 
          />
        </label>
      </div>

      {/* 4. 실시간 미리보기 (Three.js 사용) */}
      <div className="preview-3d">
        <h3>미리보기</h3>
        <ThreeDViewer
          model={selectedModel.model}
          color={selectedColor}
          roughness={roughness}
          glossiness={glossiness}
        />
      </div>
    </div>
  );
}

export default Select3D;
