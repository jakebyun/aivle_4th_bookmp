import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/books",
});

export const getBooks = () => api.get("/");
export const getBook = async (id) => {
  const res = await fetch(`/api/books/${id}`);
  return await res.json();
};
export const createBook = (data) => api.post("/", data);
export const updateBook = async (id, data) => {
  const res = await fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}
export const deleteBook = async (id) => {
  const res = await fetch(`/api/books/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('삭제 실패');
  }
  return await res.json();
};
export const generateCover = (id) => api.post(`/${id}/generate-cover`);