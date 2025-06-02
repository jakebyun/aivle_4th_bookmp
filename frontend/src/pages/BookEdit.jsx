// frontend/src/pages/BookEdit.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../api/bookApi';
import { Box, Typography, CircularProgress, Alert, Button } from '@mui/material'; // Button 추가

function BookEdit() {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [feedbackSeverity, setFeedbackSeverity] = useState('info');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError(null);
        setFeedbackMessage(null);

        // 🟡 이 부분이 중요합니다.
        // getBook(id) 호출 시 id가 제대로 전달되는지 확인
        if (id) { // id가 유효한지 확인하는 로직 추가
          const response = await getBook(id);
          if (response.data && response.data.data) {
            setBook(response.data.data);
          } else {
            setError("책 정보를 불러올 수 없습니다. 데이터 형식이 올바르지 않습니다.");
          }
        } else {
          setError("수정할 도서 ID가 제공되지 않았습니다.");
        }
      } catch (err) {
        console.error("도서 정보 조회 중 오류 발생:", err);
        if (err.response && err.response.status === 404) {
          setError("해당 도서를 찾을 수 없습니다.");
        } else {
          setError("도서 정보를 불러오는 데 실패했습니다. 서버 상태를 확인해주세요.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBook(); // useEffect 내부에서 함수 호출
  }, [id]); // id가 변경될 때마다 재실행

  // ... (handleSubmit 함수 및 나머지 렌더링 로직은 이전과 동일)
  const handleSubmit = async (updatedBookData) => {
    try {
      setLoading(true);
      setFeedbackMessage(null);

      const response = await updateBook(id, updatedBookData);
      if (response.data && response.data.status === "success") {
        setFeedbackMessage('도서가 성공적으로 수정되었습니다!');
        setFeedbackSeverity('success');
        setTimeout(() => {
          navigate(`/books/${id}`);
        }, 1500);
      } else {
        const errorMessage = response.data.message || '도서 수정에 실패했습니다.';
        setFeedbackMessage(errorMessage);
        setFeedbackSeverity('error');
      }
    } catch (err) {
      console.error("도서 수정 요청 중 오류 발생:", err);
      let errorMessage = '서버 오류로 인해 도서 수정에 실패했습니다.';
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = `수정 실패: ${err.response.data.message}`;
      } else if (err.message) {
        errorMessage = `수정 실패: ${err.message}`;
      }
      setFeedbackMessage(errorMessage);
      setFeedbackSeverity('error');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !book) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>도서 정보를 불러오는 중...</Typography>
        </Box>
    );
  }

  if (error) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
          <Alert severity="error">{error}</Alert>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/books')}>목록으로 돌아가기</Button>
        </Box>
    );
  }

  if (!book) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
          <Alert severity="warning">해당 도서를 찾을 수 없습니다.</Alert>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/books')}>목록으로 돌아가기</Button>
        </Box>
    );
  }

  return (
      <Box sx={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
        {feedbackMessage && (
            <Alert severity={feedbackSeverity} sx={{ mb: 2 }}>
              {feedbackMessage}
            </Alert>
        )}

        <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4 }}>
          도서 정보 수정
        </Typography>

        {loading ? ( // BookForm 자체의 submit loading과 구분하기 위해 이름을 loadingApiCall 등으로 변경하는 것도 고려
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <CircularProgress />
              <Typography sx={{ ml: 2 }}>도서를 수정하는 중...</Typography>
            </Box>
        ) : (
            <BookForm initialValues={book} onSubmit={handleSubmit} />
        )}
      </Box>
  );
}

export default BookEdit;