import React, { useRef, useState } from "react";
import "./../styles/DrawingBoard.css"; // ✅ 스타일 적용

function DrawingBoard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [selectedColor, setSelectedColor] = useState("#000000"); // ✅ 색상 선택 상태 추가

  // 마우스 위치 좌표 구하기
  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // 마우스 클릭 시 그림 시작
  const handleMouseDown = (e) => {
    const pos = getCanvasCoords(e);
    setLastPos(pos);
    setIsDrawing(true);
  };

  // 마우스 이동 시 그림 그리기
  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getCanvasCoords(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = selectedColor; // ✅ 사용자가 선택한 색 적용
    ctx.lineWidth = 2;
    ctx.stroke();

    setLastPos(pos);
  };

  // 그림 그리기 종료
  const endDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="drawing-board-container">
      <h2>시료를 맛보고 느껴지는 이미지를 자유롭게 그려주세요</h2>

      {/* ✅ 색상 선택 기능 추가 */}
      <div className="drawing-board-color-picker">
        <label>선 색상 선택:</label>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="drawing-board"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
    </div>
  );
}

export default DrawingBoard;
