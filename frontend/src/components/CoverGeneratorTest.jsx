// src/components/CoverGeneratorTest.jsx

import { useState } from "react";
import axios from "axios";

function CoverGeneratorTest() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("프롬프트를 입력하세요.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          model: "dall-e-3", // 최신 모델
          prompt,
          n: 1,
          size: "1024x1792", // 세로형 책 표지
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const url = response.data.data[0].url;
      setImageUrl(url);
    } catch (error) {
      console.error("OpenAI 요청 실패:", error.response || error);
      alert("이미지 생성 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h2>📘 GPT 기반 책 표지 이미지 생성</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="예: 밤하늘 아래 책을 펼친 고양이"
        rows={6}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          resize: "vertical",
          marginBottom: "12px",
        }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "생성 중..." : "표지 이미지 생성"}
      </button>

      {imageUrl && (
        <div style={{ marginTop: "24px" }}>
          <h4>🖼 생성된 책 표지</h4>
          <img
            src={imageUrl}
            alt="생성 이미지"
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CoverGeneratorTest;
