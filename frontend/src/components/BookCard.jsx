// src/components/BookCard.jsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookCard = ({ book, onEdit, onDelete }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 160,
                '&:hover .action-buttons': { opacity: 1 }
            }}
        >
            <Card
                sx={{
                    width: 160,
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease-in-out',
                    cursor: 'default'
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={book.cover_url}
                        alt={book.title}
                    />
                    <Box
                        className="action-buttons"
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            display: 'flex',
                            gap: 1,
                            opacity: 0,
                            transition: 'opacity 0.2s ease-in-out'
                        }}
                    >
                        <IconButton
                            size="small"
                            sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                            onClick={onEdit}
                        >
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            size="small"
                            sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                            onClick={onDelete}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <CardContent>
                    <Typography variant="subtitle1" noWrap>
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {book.author}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BookCard;
