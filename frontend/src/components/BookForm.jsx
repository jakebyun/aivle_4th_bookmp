// src/components/BookForm.jsx
function BookForm({ initialValues = {}, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      title: form.title.value,
      author: form.author.value,
      cover_prompt: form.cover_prompt.value,
      // cover_url은 생성 버튼에서 연결 예정
    };
    onSubmit(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" defaultValue={initialValues.title} placeholder="제목" />
      <input name="author" defaultValue={initialValues.author} placeholder="작가" />
      <textarea name="cover_prompt" defaultValue={initialValues.cover_prompt} placeholder="프롬프트" />
      <button type="submit">저장</button>
    </form>
  );
}

export default BookForm;