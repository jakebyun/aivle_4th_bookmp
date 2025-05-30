// src/pages/BookEdit.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../api/bookApi';


function BookEdit() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [book, setBook] = useState(null);
  useEffect(() => {
    getBook(id).then((res) => setBook(res.data.data))
    // getBook(id).then((res) => setBook(res.data))
  }, [id]);

  const handleSubmit = async (updatedBook) => {
    await updateBook(id, updatedBook );
    navigate (`/books/${id}`);
  };


  return (
      <div>
        <h2>도서 수정 페이지</h2>
        {book && (
            <BookForm
                initialValues={book}
                onSubmit={handleSubmit}
            />
        )}
      </div>);
}

export default BookEdit;
