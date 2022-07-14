const inquirer = require('inquirer');
const connection = require('./config/connection');
const cTable = require('console.table');

const viewDepartments = () => {

};

const viewRoles = () => {

};

const viewEmployees = () => {

};

const addDepartment = () => {

};

const addRole = () => {

};

const addEmployee = () => {

};

const updateRole = () => {

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
  console.log(commands);
  console.log(commands.manage);

  // switch(commands)

}

manageCompany();



