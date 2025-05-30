// src/pages/BookDetail.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookDetail() {
  const navigate = useNavigate();

  // 🟡 임시 데이터
  const [title, setTitle] = useState("1984");
  const [author, setAuthor] = useState("조지 오웰");
  const [createdAt, setCreatedAt] = useState("2025-05-29T20:00:55");
  const [updatedAt, setUpdatedAt] = useState("2025-05-29T23:30:10");
  const [imageUrl, setImageUrl] = useState("https://");
  const [localImage, setLocalImage] = useState(null);

  const handleDelete = () => {
    alert("도서가 삭제되었습니다.");
    navigate("/");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px", alignItems: "flex-start" }}>
      {/* 이미지 영역 */}
      <div style={{ flex: "1", paddingRight: "20px" }}>
        <img
          src={localImage || imageUrl}
          alt="책 이미지"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }}
        />
        <div style={{ marginTop: "10px" }}>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>

      {/* 정보 입력 영역 */}
      <div style={{ flex: "1" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "20px" }}>
          <button style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "5px" }} onClick={handleDelete}>
            도서 삭제
          </button>
          <button style={{ backgroundColor: "#d1ecf1", padding: "10px", borderRadius: "5px" }} onClick={() => navigate("/")}>
            Home
          </button>
        </div>

        <div>
          <label>작품 제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

          <label>작품 작가</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

          <label>시간</label>
          <div style={{ marginBottom: "10px" }}>
            도서 생성 날짜 : {createdAt}<br />
            도서 수정 날짜 : {updatedAt}
          </div>

          <label>이미지 URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
