import React, { useState } from "react";
import "./styles/App.css";
import DrawingBoard from "./components/DrawingBoard";
import SelectImage from "./components/SelectImage";
import Select3D from "./components/Select3D";  // ✅ 새로운 3D 선택 컴포넌트 추가

function App() {
  const [version, setVersion] = useState("ver1"); // 현재 선택된 버전 상태 관리

  return (
    <div className="App">
      <h1>프로토타입 선택</h1>
      
      {/* Ver1(자유 그리기), Ver2(이미지 선택), Ver3(3D 요소 선택) 전환 버튼 */}
      <button onClick={() => setVersion("ver1")}>Ver1: 자유롭게 그리기</button>
      <button onClick={() => setVersion("ver2")}>Ver2: 이미지 요소 선택</button>
      <button onClick={() => setVersion("ver3")}>Ver3: 3차원 요소 선택</button>

      {/* 선택된 버전에 따라 다른 컴포넌트 렌더링 */}
      {version === "ver1" && <DrawingBoard />}
      {version === "ver2" && <SelectImage />}
      {version === "ver3" && <Select3D />}  {/* ✅ 새로운 컴포넌트 추가 */}
    </div>
  );
}

export default App;
