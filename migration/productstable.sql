CREATE TABLE public.products (
    product_id serial PRIMARY KEY,
    name varchar NOT NULL,
    price numeric(10, 2) NOT NULL
);
