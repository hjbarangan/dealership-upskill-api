create view v_all_car(
    car_id,
    brand,
    model,
    year,
    serial_no,
    color,
    car_price,
    brand_new
) as
SELECT
    cars.car_id,
    cars.brand,
    cars.model,
    cars.year,
    cars.serial_no,
    cars.color,
    cars.car_price,
    cars.brand_new
FROM
    cars;

create view v_all_customer (
    customer_id,
    customer_firstname,
    customer_lastname,
    customer_address,
    contact_no
) as
SELECT
    customers.customer_id,
    customers.customer_firstname,
    customers.customer_lastname,
    customers.customer_address,
    customers.contact_no
FROM
    customers;

create view v_all_sales_invoice(
    invoice_number,
    invoice_date,
    salesperson_id,
    customer_id,
    car_id
) as
SELECT
    i.invoice_number,
    i.invoice_date,
    sp.salesperson_id,
    cu.customer_id,
    cr.car_id
FROM
    sales_invoices i
    JOIN salespersons sp ON i.salesperson_id = sp.salesperson_id
    JOIN customers cu ON i.customer_id = cu.customer_id
    JOIN cars cr ON i.car_id = cr.car_id;

create view v_all_salesperson (
    salesperson_id,
    salesperson_firstname,
    salesperson_lastname,
    contact_no
) as
SELECT
    salespersons.salesperson_id,
    salespersons.salesperson_firstname,
    salespersons.salesperson_lastname,
    salespersons.contact_no
FROM
    salespersons;

create view v_all_user(
    user_id,
    user_firstname,
    user_lastname,
    email,
    password
) as
SELECT
    users.user_id,
    users.user_firstname,
    users.user_lastname,
    users.email,
    users.password
FROM
    users;

reate view v_sales_invoice_details (
    invoice_number,
    invoice_date,
    salesperson_name,
    customer_name,
    serial_no
) as
SELECT
    i.invoice_number,
    i.invoice_date,
    concat(
        sp.salesperson_firstname,
        ' ',
        sp.salesperson_lastname
    ) AS salesperson_name,
    concat(cu.customer_firstname, ' ', cu.customer_lastname) AS customer_name,
    cr.serial_no
FROM
    sales_invoices i
    JOIN salespersons sp ON i.salesperson_id = sp.salesperson_id
    JOIN customers cu ON i.customer_id = cu.customer_id
    JOIN cars cr ON i.car_id = cr.car_id;