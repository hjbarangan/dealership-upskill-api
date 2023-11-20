create procedure add_cars(IN p_brand character varying, IN p_model character varying, IN p_year integer, IN p_serial_no character varying, IN p_color character varying, IN p_car_price numeric, IN p_brand_new character varying)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT *
        FROM cars
        WHERE
            serial_no = p_serial_no
    ) THEN
        RAISE NOTICE 'Car already exists.';
    ELSE
        INSERT INTO cars (
            brand,
            model,
            year,
            serial_no,
            color,
            car_price,
            brand_new
    ) VALUES (
        p_brand,
        p_model,
        p_year,
        p_serial_no,
        p_color,
        p_car_price,
        p_brand_new
    );
 END IF;
END
$$;

create procedure add_customer(IN p_customer_firstname character varying, IN p_customer_lastname character varying, IN p_customer_address character varying, IN p_contact_no character)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT *
        FROM customers
        WHERE
            (customer_firstname = p_customer_firstname AND
            customer_lastname = p_customer_lastname) OR
            contact_no = p_contact_no
    ) THEN
        RAISE NOTICE 'Customer already exists.';
    ELSE
        INSERT INTO customers (
            customer_firstname,
            customer_lastname,
            customer_address,
            contact_no
    ) VALUES (
        p_customer_firstname,
        p_customer_lastname,
        p_customer_address,
        p_contact_no
    );
 END IF;
END
$$;

create procedure add_sales_invoice(IN p_invoice_date date, IN p_car_id integer, IN p_customer_id integer, IN p_salesperson_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT *
              FROM sales_invoices
              WHERE (invoice_date = p_invoice_date AND car_id = p_car_id)
            )
THEN
    RAISE NOTICE 'Invoice already exists for this car on the given date';
ELSE
    INSERT INTO sales_invoices(
        invoice_date,
        car_id,
        customer_id,
        salesperson_id
    ) VALUES (
        p_invoice_date,
        p_car_id,
        p_customer_id,
        p_salesperson_id
    );
END IF;
END;
$$;

create procedure add_salesperson(IN p_salesperson_firstname character varying, IN p_salesperson_lastname character varying, IN p_contact_no character)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT *
        FROM salespersons
        WHERE
            (salesperson_firstname = p_salesperson_firstname AND
            salesperson_lastname = p_salesperson_lastname) OR
            contact_no = p_contact_no
    ) THEN
        RAISE NOTICE 'Salesperson already exists.';
    ELSE
    INSERT INTO salespersons(
        salesperson_firstname,
        salesperson_lastname,
        contact_no
    ) VALUES (
        p_salesperson_firstname,
        p_salesperson_lastname,
        p_contact_no
    );
    END IF;
END
$$;

create procedure add_user(IN p_user_firstname character varying, IN p_user_lastname character varying, IN p_email character varying, IN p_password character varying)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT *
        FROM users
        WHERE
            (user_firstname = p_user_firstname AND user_lastname = p_user_lastname) OR
            email = p_email
    )THEN
        RAISE NOTICE 'User already exists.';
    ELSE
        INSERT INTO users(
            user_firstname,
            user_lastname,
            email,
            password
    ) VALUES (
        p_user_firstname,
        p_user_lastname,
        p_email,
        p_password
    );
 END IF;
END
$$;

create procedure delete_car(IN p_car_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT car_id FROM public.cars WHERE car_id = p_car_id) THEN
        IF EXISTS(SELECT car_id FROM public.sales_invoices WHERE car_id = p_car_id) THEN
            RAISE NOTICE 'Car has associated sales invoices. Cannot delete.';
        ELSE
            DELETE FROM public.cars WHERE car_id = p_car_id;
        END IF;
    ELSE
        RAISE NOTICE 'Car does not exist.';
    END IF;
END;
$$;

create procedure delete_customer(IN p_customer_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT customer_id FROM public.customers WHERE customer_id = p_customer_id) THEN
        IF EXISTS(SELECT customer_id FROM public.sales_invoices WHERE customer_id  = p_customer_id) THEN
            RAISE NOTICE 'Customer has associated sales invoices. Cannot delete.';
        ELSE
            DELETE FROM public.customers WHERE customer_id = p_customer_id;
        END IF;
    ELSE
        RAISE NOTICE 'Customer does not exist.';
    END IF;
END;
$$;

create procedure delete_sales_invoice(IN p_invoice_number integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT * FROM public.sales_invoices WHERE invoice_number = p_invoice_number) THEN
        DELETE FROM public.sales_invoices WHERE invoice_number = p_invoice_number;
    ELSE
        RAISE NOTICE 'Invoice does not exist.';
    END IF;
END;
$$;

create procedure delete_salesperson(IN p_salesperson_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT salesperson_id FROM public.salespersons WHERE salesperson_id = p_salesperson_id) THEN
        IF EXISTS(SELECT salesperson_id FROM public.sales_invoices WHERE salesperson_id = p_salesperson_id) THEN
            RAISE NOTICE 'Salesperson has associated sales invoices. Cannot delete.';
        ELSE
            DELETE FROM public.salespersons WHERE salesperson_id = p_salesperson_id;
        END IF;
    ELSE
        RAISE NOTICE 'Salesperson does not exist.';
    END IF;
END;
$$;

create procedure delete_user(IN p_user_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT * FROM public.users WHERE user_id = p_user_id) THEN
        DELETE FROM public.users WHERE user_id = p_user_id;
    ELSE
        RAISE NOTICE 'User does not exist.';
    END IF;
END;
$$;

create procedure update_cars(IN p_car_id integer, IN p_brand character varying, IN p_model character varying, IN p_year integer, IN p_serial_no character varying, IN p_color character varying, IN p_car_price numeric, IN p_brand_new character varying)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT car_id
        FROM cars
        WHERE car_id = p_car_id
    ) THEN

    UPDATE cars
    SET
        brand = p_brand,
        model = p_model,
        year = p_year,
        serial_no = p_serial_no,
        color = p_color,
        car_price = p_car_price,
        brand_new = p_brand_new
    WHERE
         car_id = p_car_id;
    ELSE
        RAISE NOTICE 'Car does not exists.';
    END IF;
END;
$$;

create procedure update_customer(IN p_customer_id integer, IN p_customer_firstname character varying, IN p_customer_lastname character varying, IN p_customer_address character varying, IN p_contact_no character)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT customer_id
        FROM customers
        WHERE customer_id = p_customer_id
    ) THEN

    UPDATE customers
    SET
        customer_id = p_customer_id,
        customer_firstname = p_customer_firstname,
        customer_lastname = p_customer_lastname,
        customer_address = p_customer_address,
        contact_no = p_contact_no
    WHERE
        customer_id = p_customer_id;
    ELSE
        RAISE NOTICE 'Customer does not exists.';
    END IF;
END;
$$;

create procedure update_sales_invoice(IN p_invoice_number integer, IN p_invoice_date date, IN p_car_id integer, IN p_customer_id integer, IN p_salesperson_id integer)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(SELECT * FROM sales_invoices WHERE invoice_number = p_invoice_number)
THEN UPDATE sales_invoices SET
        invoice_date = p_invoice_date,
        car_id = p_car_id,
        customer_id = p_customer_id,
        salesperson_id = p_salesperson_id
    WHERE invoice_number = p_invoice_number;
        ELSE
            RAISE NOTICE 'Invoice does not exist.';
    END IF;
END;
$$;

create procedure update_salesperson(IN p_new_salesperson_id integer, IN p_new_salesperson_firstname character varying, IN p_new_salesperson_lastname character varying, IN p_new_contact_no character)
    language plpgsql
as
$$
    DECLARE
    rows_affected INT;
BEGIN
        UPDATE salespersons
        SET
            salesperson_firstname = p_new_salesperson_firstname,
            salesperson_lastname = p_new_salesperson_lastname,
            contact_no = p_new_contact_no
        WHERE salesperson_id = p_new_salesperson_id;

    GET DIAGNOSTICS rows_affected  = ROW_COUNT;

    IF rows_affected  = 0 THEN
        RAISE NOTICE 'User not found.';
    ELSE
        RAISE NOTICE 'User information updated.';
    END IF;
END;
$$;

create procedure update_user(IN p_user_id integer, IN p_user_firstname character varying, IN p_user_lastname character varying, IN p_email character varying, IN p_password character varying)
    language plpgsql
as
$$
BEGIN
    IF EXISTS(
        SELECT user_id
        FROM users
        WHERE user_id = p_user_id
    ) THEN

    UPDATE users
    SET
        user_firstname = p_user_firstname,
        user_lastname = p_user_lastname,
        email = p_email,
        password = p_password
    WHERE
        user_id = p_user_id;
    ELSE
        RAISE NOTICE 'User does not exists.';
    END IF;
END;
$$;