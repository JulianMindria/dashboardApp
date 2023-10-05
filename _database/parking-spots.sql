CREATE TABLE parking_spots (
    spot_id SERIAL PRIMARY KEY,
    spot_name VARCHAR(50) NOT NULL,
    is_available BOOLEAN NOT NULL,
    capacity INT NOT NULL
);

INSERT INTO parking_spots (spot_name, is_available, capacity)
VALUES
    ('Spot A1', true, 1),
    ('Spot A2', true, 1),
    ('Spot B1', true, 2),
    ('Spot B2', true, 2),
    ('Spot C1', true, 1),
    ('Spot C2', true, 1),
    ('Spot D1', true, 3),
    ('Spot D2', true, 3),
    ('Spot E1', true, 2),
    ('Spot E2', true, 2);