// src/main/java/com/example/book/controller/BookController.java
package com.example.book.controller;

import com.example.book.dto.BookDTO;
import com.example.book.dto.CommonResponse;
import com.example.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/books", produces = "application/json;charset=UTF-8")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    // 1. 도서 목록 조회
    @GetMapping
    public ResponseEntity<CommonResponse<List<BookDTO.Response>>> getBooks(
            @RequestParam(value = "title", required = false) String title) {
        return ResponseEntity.ok(bookService.findBooks());
    }

    // 2. 도서 상세 조회
    @GetMapping("/{id}")
    public ResponseEntity<CommonResponse<BookDTO.Response>> getBook(@PathVariable("id") Long id) {
        return ResponseEntity.ok(bookService.findBook(id));
    }

    // 3. 도서 등록
    @PostMapping(consumes = "application/json;charset=UTF-8")
    public ResponseEntity<CommonResponse<BookDTO.Response>> createBook(@RequestBody BookDTO.Post bookDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bookService.insertBook(bookDTO));
    }

    // 4. 도서 수정
    @PutMapping(value = "/{id}", consumes = "application/json;charset=UTF-8")
    public ResponseEntity<CommonResponse<BookDTO.Response>> updateBook(
            @PathVariable("id") Long id, @RequestBody BookDTO.Put bookDTO) {
        return ResponseEntity.ok(bookService.updateBook(id, bookDTO));
    }

    // 5. 도서 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<CommonResponse<Void>> deleteBook(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookService.deleteBook(id));
    }
}