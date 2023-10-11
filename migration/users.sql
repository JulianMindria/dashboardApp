CREATE TABLE public.users (
	user_id serial4 NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	roles varchar NOT NULL DEFAULT 'user'::character varying,
	phone varchar NOT NULL,
	email varchar NOT NULL,
	created_at timestamp NULL DEFAULT now(),
	updated_at timestamp NULL,
	isverified bool NOT NULL DEFAULT true,
	CONSTRAINT pk_users PRIMARY KEY (user_id)
);