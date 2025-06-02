CREATE TABLE IF NOT EXISTS book (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    title VARCHAR(255),
    cover_prompt VARCHAR(255),
    cover_url VARCHAR(512),
    author VARCHAR(100),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
    );