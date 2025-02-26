const express = require("express");
const path = require("path");

const app = express();

// React 정적 파일 서빙
app.use(express.static(path.join(__dirname, "build")));

// API 엔드포인트 예시
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// 모든 경로를 React의 index.html로 리다이렉트 (SPA 지원)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
