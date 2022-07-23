INSERT INTO departments (name)
VALUES ("Executive"),
       ("Management"),
       ("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES ("CEO", 100000, 1),
       ("CFO", 100000, 1),
       ("HR Manager", 90000, 2),
       ("IT Manager", 90000, 2),
       ("Sales Manager", 90000, 2),
       ("Software Engineer", 80000, 3),
       ("Business Analyst", 80000, 3),
       ("Sales Representative", 80000, 3);

INSERT INTO employees (last_name, first_name, role_id, manager_id)
VALUES ("Jordan", "Michael", 1, null),
       ("James", "Lebron", 2, null),
       ("Abdul-Jabbar", "Kareem", 3, 1),
       ("Johnson", "Magic", 4, 2),
       ("Chamberlain", "Wilt", 5, 2),
       ("Russell", "Bill", 6, 4),
       ("Bird", "Larry", 7, 5),
       ("Duncan", "Tim", 8, 5);
       