// src/components/BookCard.jsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
 
const BookCard = ({ book, onClick }) => {
    return (
        <Card onClick={() => onClick(book.id)}
        sx={{
            width: 160,
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
            transform: 'scale(1.05)',
            }
        }}
        >
        <CardMedia
            component="img"
            height="250"
            image={book.cover_url}
            alt={book.title}
        />
        <CardContent>
            <Typography variant="subtitle1" noWrap>
            {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
            {book.author}
            </Typography>
        </CardContent>
        </Card>
    );
};
 
export default BookCard;