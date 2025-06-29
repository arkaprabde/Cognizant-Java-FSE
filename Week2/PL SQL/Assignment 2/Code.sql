CREATE TABLE savings_accounts (
    account_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    balance DECIMAL(12, 2)
);

CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    balance DECIMAL(12, 2)
);

INSERT INTO savings_accounts (customer_id, balance) VALUES
(1, 10000.00),
(2, 5000.00),
(3, 20000.00);

INSERT INTO employees (name, department, salary) VALUES
('Anita Rao', 'Finance', 70000.00),
('Rahul Mehta', 'IT', 65000.00),
('Sneha Das', 'HR', 60000.00),
('Vikram Sen', 'IT', 68000.00);

INSERT INTO accounts (customer_id, balance) VALUES
(1, 15000.00),
(2, 7000.00),
(3, 12000.00);

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest()
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01);
END $$;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name VARCHAR,
    bonus_percent DECIMAL
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE employees
    SET salary = salary + (salary * (bonus_percent / 100))
    WHERE department = dept_name;
END $$;

CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account INT,
    to_account INT,
    amount DECIMAL
)
LANGUAGE plpgsql
AS $$
DECLARE
    from_balance DECIMAL;
BEGIN
    SELECT balance INTO from_balance
    FROM accounts
    WHERE account_id = from_account;

    IF from_balance IS NULL THEN
        RAISE EXCEPTION 'Source account does not exist';
    ELSIF from_balance < amount THEN
        RAISE EXCEPTION 'Insufficient funds';
    END IF;

    -- Debit from source
    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = from_account;

    -- Credit to target
    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = to_account;
END $$;

CALL ProcessMonthlyInterest();
CALL UpdateEmployeeBonus('IT', 15);
CALL TransferFunds(1, 2, 200.00);

SELECT * FROM savings_accounts;
SELECT * FROM employees;
SELECT * FROM accounts;
