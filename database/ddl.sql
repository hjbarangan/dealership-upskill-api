create table cars (
    car_id serial primary key,
    brand varchar(50) not null,
    model varchar(50) not null,
    year integer not null,
    serial_no varchar(17) not null unique,
    color varchar(30) not null,
    car_price numeric(12, 2) not null,
    brand_new varchar(10) not null
);

create table customers (
    customer_id serial primary key,
    customer_firstname varchar(50) not null,
    customer_lastname varchar(50) not null,
    customer_address varchar(50) not null,
    contact_no char(11) not null unique,
    constraint customers_fullname unique (customer_firstname, customer_lastname)
);

create table salespersons (
    salesperson_id serial primary key,
    salesperson_firstname varchar(50) not null,
    salesperson_lastname varchar(50) not null,
    contact_no char(11) not null unique,
    constraint salespersons_fullname unique (salesperson_firstname, salesperson_lastname)
);

create table users (
    user_id serial primary key,
    user_firstname varchar(50) not null,
    user_lastname varchar(50) not null,
    email varchar(30) not null unique,
    password varchar(30) not null,
    constraint users_fullname unique (user_firstname, user_lastname)
);

create table sales_invoices (
    invoice_number serial primary key,
    invoice_date date not null,
    car_id integer not null constraint fk_car references cars,
    customer_id integer not null constraint fk_customer references customers,
    salesperson_id integer not null constraint fk_salesperson references salespersons
);