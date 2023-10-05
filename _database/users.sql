CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    is_officer BOOLEAN NOT NULL
);

INSERT INTO users (username, password_hash, is_officer)
VALUES
    ('user1', 'hashed_password_1', true),
    ('user2', 'hashed_password_2', false),
    ('user3', 'hashed_password_3', true),
    ('user4', 'hashed_password_4', false),
    ('user5', 'hashed_password_5', true),
    ('user6', 'hashed_password_6', false),
    ('user7', 'hashed_password_7', true),
    ('user8', 'hashed_password_8', false),
    ('user9', 'hashed_password_9', true),
    ('user10', 'hashed_password_10', false);