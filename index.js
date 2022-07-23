const inquirer = require('inquirer');
const connection = require('./config/connection');
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '123password',
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);

const viewDepartments = () => {
  const sql = `SELECT id, name FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
    } console.table(rows)
      manageCompany();
  })
};

const viewRoles = () => {
  console.log('viewing all roles');
};

const viewEmployees = () => {
  console.log('viewing all employees');
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

db.connect(err => {
  if (err) throw err;
  manageCompany();
});

const manageCompany = () => {
  return inquirer.prompt({

    type: 'list',
    name: 'manage',
    message: "Select to manage company employees",
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role'],

  })

  .then(response => {
    pushCommand(response);
    return inquirer.prompt([
      {

      type: 'confirm',
      name: 'continue',
      message: 'Would you like to manage more company employees',

      }
    ])
  })

    .then(secondResponse => {
      if(secondResponse.continue) {
        return manageCompany()
      }
    })
}

const pushCommand = (commands) => {

  switch(commands.manage) {

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

}

manageCompany();



