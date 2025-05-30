// src/router/Router.jsx

import { Routes, Route } from "react-router-dom";
import BookList from "../pages/BookList";
import BookDetail from "../pages/BookDetail";
import BookCreate from "../pages/BookCreate";
import BookEdit from "../pages/BookEdit";

const Router = () => (
  <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/new" element={<BookCreate />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/books/:id/edit" element={<BookEdit />} />
  </Routes>
);

export default Router;
