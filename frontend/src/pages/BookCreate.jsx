// src/pages/BookCreate.jsx
import BookForm from '../components/BookForm';
import { createBook } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';

function BookCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (newBook) => {
    // 백엔드 연동 시 이 부분 활성화
    // await createBook(newBook);
    console.log("생성 요청", newBook);
    navigate("/");
  };

  return (
    <div>
      <h2>도서 등록</h2>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}

export default BookCreate;