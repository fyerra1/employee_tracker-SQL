const inquirer = require('inquirer');
const connection = require('./config/connection');
const cTable = require('console.table');

const viewDepartments = () => {
  console.log('view departments');
};

const viewRoles = () => {
  console.log('view roles');
};

const viewEmployees = () => {
  console.log('view employees');
};

const addDepartment = () => {
  console.log('add department');
};

const addRole = () => {
  console.log('add role');
};

const addEmployee = () => {
  console.log('add employee');
};

const updateRole = () => {
  console.log('update role');
};

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



