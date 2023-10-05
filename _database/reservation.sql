CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    spot_id INT NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    is_paid BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (spot_id) REFERENCES parking_spots (spot_id)
);

INSERT INTO reservations (user_id, spot_id, reservation_date, reservation_time, is_paid)
VALUES
    (1, 1, '2023-10-10', '08:00:00', true),
    (2, 3, '2023-10-11', '10:30:00', false),
    (3, 5, '2023-10-12', '14:15:00', true),
    (4, 7, '2023-10-13', '09:45:00', false),
    (5, 2, '2023-10-14', '11:00:00', true),
    (6, 4, '2023-10-15', '16:30:00', false),
    (7, 6, '2023-10-16', '12:45:00', true),
    (8, 8, '2023-10-17', '07:30:00', false),
    (9, 9, '2023-10-18', '15:15:00', true),
    (10, 10, '2023-10-19', '13:00:00', false);

