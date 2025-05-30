// src/pages/BookList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, Box } from '@mui/material';
import BookCard from '../components/BookCard';
import { useNavigate } from 'react-router-dom';
 
const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
 
//   useEffect(() => {
//     axios.get('/api/books')
//       .then(res => {
//         if (res.data.status === 'success') {
//           setBooks(res.data.data);
//         }
//       })
//       .catch(err => console.error(err));
//   }, []);
 
// ========= test용 ==========
 
useEffect(() => {
 
  const mockData = [
    {
      id: 1,
      title: '모두의 자바',
      author: '홍길동',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 2,
      title: '리액트를 다루는 기술',
      author: '홍길동',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 3,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 4,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 5,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 6,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 7,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 8,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 9,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 10,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 11,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    },
    {
      id: 12,
      title: '스프링 부트 인 액션',
      author: '크레이그 월즈',
      cover_url: 'https://placehold.co/150x220',
    }
  ];
 
  setBooks(mockData);
}, []);
 
// ==================================
 
  const handleCardClick = (id) => {
    navigate(`/books/${id}`);
  };
 
    return (
        <Box sx={{ px: 35, py: 15, mx: 'auto' }}>
           
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" fontWeight={600}>도서 목록</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" size="large">
                    도서 검색
                    </Button>
                    <Button variant="contained" size="large" onClick={() => navigate('/books/create')}>
                    도서 등록
                </Button>
                </Box>
            </Box>
 
            <Grid container spacing={2} justifyContent="flex-start">
                {books.map(book => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={book.id}>
                    <BookCard book={book} onClick={handleCardClick} />
                </Grid>
                ))}
            </Grid>
        </Box>
    );
};
 
export default BookList;