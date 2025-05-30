// src/pages/Bookdetail-1.jsx

import { useNavigate, useParams } from 'react-router-dom';
import { deleteBook } from '../api/bookApi';

function BookDetail() {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm('이 도서를 삭제하시겠습니까?');
    if (!confirm) return;

    try {
      const res = await deleteBook(id);
      if (res.status === "success") {
        alert(res.message); // "도서가 성공적으로 삭제되었습니다."
        navigate('/books');
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (err) {
      console.error("삭제 요청 실패:", err);
      alert('서버 오류로 인해 삭제에 실패했습니다.');
    }
  };

  return (
      <div><h2>도서 상세 페이지</h2>
        {/* 도서 정보 표시 */}
        <button onClick={handleDelete}>삭제</button>
      </div>
  );
}

export default BookDetail;
