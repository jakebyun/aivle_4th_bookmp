// 등록, 수정 공용 폼


function BookForm({ book, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newBook = {
            title: form.title.value,
            author: form.author.value,
            cover_prompt: form.cover_prompt.value,
        };
        onSubmit(newBook);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" defaultValue={book?.title} placeholder="제목" />
            <input name="author" defaultValue={book?.author} placeholder="작가" />
            <textarea name="cover_prompt" defaultValue={book?.cover_prompt} placeholder="프롬프트" />
            <button type="submit">저장</button>
        </form>
    );
}

export default BookForm;
