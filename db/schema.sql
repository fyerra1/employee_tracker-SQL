DROP IF EXISTS employees_db;

CREATE employees_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
)

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)

)



