CREATE TABLE public.transactions (
    transaction_id serial PRIMARY KEY,
    user_id integer REFERENCES public.users(user_id),
    transaction_date timestamp NOT NULL
);