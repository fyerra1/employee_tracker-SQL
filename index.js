const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');


const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
    } console.table(rows)
      manageCompany();
  })
};

const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
    } console.table(rows)
      manageCompany();
  })
};

const viewEmployees = () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
    } console.table(rows)
      manageCompany();
  })
};

const addDepartment = () => {

  inquirer.prompt([
    {
      type: 'input',
      name: 'newDepartment',
      message: 'Provide name of the new department'
    }
  ])
    .then(response => {
      const departmentName = response.newDepartment;
      
      const sql = `INSERT INTO departments (name) VALUES (?)`;
      db.query(sql, departmentName, (err, rows) => {
        if (err) {
          console.log(err)
        } console.table(rows)
          viewDepartments();
      })
    })
    
};

const addRole = () => {

  db.query(`SELECT * FROM departments`, (err, rows) => {
    if(err) {
      console.log(err)
    } const departments = rows.map( ({ name, id }) => ({ name: name, value: id }))
     
      inquirer.prompt([
        {
          type: 'input',
          name: 'newTitle',
          message: 'Provide title for the new role'
        },
        {
          type: 'input',
          name: 'newSalary',
          message: 'Provide salary for the new role (i.e 70000)'
        },
        {
          type: 'list',
          name: 'newDepartment',
          message: 'Assign new role to a department',
          choices: departments
        }
      ])
        .then(response => {
          const newRole = [response.newTitle, response.newSalary, response.newDepartment];
          console.log(newRole);

          const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
          db.query(sql, newRole, (err, rows) => {
            if (err) {
              console.log(err)
            } console.table(rows)
              viewRoles();
          })
        })
    
  })
};

const addEmployee = () => {
  console.log('added employee');
};

const updateRole = () => {
  console.log('updated role');
};


const manageCompany = () => {
  return inquirer.prompt({

    type: 'list',
    name: 'manage',
    message: "Select to manage company employees",
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role'],

  })

  .then(response => {
    switch(response.manage) {

      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update employee role':
        updateRole();
        break;
  }
  
    })
}


manageCompany();



