// src/api/bookApi.js

// fetch 말고 axios로 통일
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/books",
});

export const getBooks = () => api.get("/");
export const getBook = (id) => api.get(`/${id}`); // fetch 제거 및 axios 일관
export const createBook = (data) => api.post("/", data);
export const updateBook = (id, data) => api.put(`/${id}`, data);
export const deleteBook = (id) => api.delete(`/${id}`);
export const generateCover = (id) => api.post(`/${id}/generate-cover`);



// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api/books",
// });

// export const getBooks = () => api.get("/");
// export const getBook = async (id) => {
//   const res = await fetch(`/api/books/${id}`);
//   return await res.json();
// };
// export const createBook = (data) => api.post("/", data);
// export const updateBook = async (id, data) => {
//   const res = await fetch(`/api/books/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return await res.json();
// }
// export const deleteBook = async (id) => {
//   const res = await fetch(`/api/books/${id}`, {
//     method: 'DELETE',
//   });

//   if (!res.ok) {
//     throw new Error('삭제 실패');
//   }
//   return await res.json();
// };
// export const generateCover = (id) => api.post(`/${id}/generate-cover`);