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
  console.log('added department');
};

const addRole = () => {
  console.log('added role');
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



