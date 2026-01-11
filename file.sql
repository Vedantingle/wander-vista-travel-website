step 1 = open XAMPP Control Panel and start Apache and MySQL.
step 2 = open your web browser and go to http://localhost/phpmyadmin/.
step 3 = click on the "Databases" tab.
step 4 = in the "Create database" field, enter a name user_accounts and click "Create".
step 5 = click on the newly created database user_accounts.
step 6 = click on the "SQL" tab to run SQL queries.
step 7 = copy and paste the SQL code below into the SQL query box.
step 8 = click "Go" to execute the SQL code.
step 9 = the table users will be created in the user_accounts database.

## Create the table in the database
-- This SQL code creates a table named 'users' in the 'user_accounts' database.
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    country VARCHAR(50),
    interests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
