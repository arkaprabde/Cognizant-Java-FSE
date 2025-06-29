CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    balance DECIMAL(10,2),
    is_vip BOOLEAN DEFAULT FALSE
);

CREATE TABLE loans (
    loan_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    due_date DATE,
    interest_rate DECIMAL(4,2)
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    balance DECIMAL(10,2),
    is_vip BOOLEAN DEFAULT FALSE
);

INSERT INTO customers (name, age, balance) VALUES
('Arjun', 65, 15000),
('Meera', 45, 9000),
('Ravi', 70, 20000);

INSERT INTO loans (customer_id, due_date, interest_rate) VALUES
(1, CURRENT_DATE + INTERVAL '15 days', 5.5),
(2, CURRENT_DATE + INTERVAL '40 days', 6.0),
(3, CURRENT_DATE + INTERVAL '20 days', 5.0);

DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT l.loan_id, l.interest_rate
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE c.age > 60
    LOOP
        UPDATE loans
        SET interest_rate = r.interest_rate - 1.0
        WHERE loan_id = r.loan_id;
    END LOOP;
END $$;

DO $$
DECLARE
    c RECORD;
BEGIN
    FOR c IN SELECT customer_id, balance FROM customers
    LOOP
        IF c.balance > 10000 THEN
            UPDATE customers SET is_vip = TRUE WHERE customer_id = c.customer_id;
        END IF;
    END LOOP;
END $$;

DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN
        SELECT c.name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date <= CURRENT_DATE + INTERVAL '30 days'
    LOOP
        RAISE NOTICE 'Reminder: % has a loan due on %', r.name, r.due_date;
    END LOOP;
END $$;
