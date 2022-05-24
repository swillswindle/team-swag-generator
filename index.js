const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./src/template.js");
const { validate } = require("@babel/types");

const employees = [];
const DIST_DIR = path.resolve(__dirname, "dist");

console.log("Hello, and welcome to the Employee Tracker!");
console.log(`We're gonna build your team!`);
console.log(`Let's get this bread`);

function promptUser() {
  function createEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "What is the employee's role?",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])
      .then((response) => {
        if (response.role === "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                validate: (input) => {
                  if (input === "") {
                    return "Please enter a name";
                  }
                  return true;
                },
              },

              {
                type: "input",
                name: "id",
                message: "What is the employee's id?",
                validate: (input) => {
                  const pass = input.match(/^[1-9]\d*$/);
                  if (pass) {
                    return true;
                  }
                  return "Please enter an integer greater than 0";
                },
              },
              {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
                validate: (input) => {
                  const pass = input.match(/\S+@\S+\.\S+/);
                  if (pass) {
                    return true;
                  }
                  return "Please enter a valid email";
                },
              },

              {
                type: "input",
                name: "officeNumber",
                message: "What is the employee's office number?",
                validate: (input) => {
                  const pass = input.match(/^[1-9]\d*$/);
                  if (pass) {
                    return true;
                  }
                  return "Please enter an integer greater than 0";
                },
              },
            ])
            .then((response) => {
              const manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNumber
              );

              employees.push(manager);
              console.log(`${response.name} has been added to the team!`);

              if (employees.length < 3) {
                promptUser();
              } else {
                if (employees.length >= 3) {
                  if (employees.length >= 5) {
                    console.log(`Your team is ready!`);
                    fs.writeFile(
                      path.join(DIST_DIR, "team.html"),
                      render(employees),
                      (err) => {
                        if (err) {
                          throw err;
                        }

                        console.log(`Your team is ready!`);
                      }
                    );
                  } else {
                    inquirer
                      .prompt([
                        {
                          type: "confirm",
                          name: "confirm",
                          message: "Would you like to add another team member?",
                        },
                      ])
                      .then((response) => {
                        if (response.confirm) {
                          promptUser();
                        } else {
                          fs.writeFile(
                            path.join(DIST_DIR, "team.html"),
                            render(employees),
                            (err) => {
                              if (err) {
                                throw err;
                              }
                              console.log(`Your team is ready!`);
                            }
                          );
                        }
                      });
                  }
                }
              }
            });
        } else if (response.role === "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
              },
              {
                type: "input",
                name: "id",
                message: "What is the employee's id?",
              },
              {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
              },
              {
                type: "input",
                name: "github",
                message: "What is the employee's github?",
              },
            ])
            .then((response) => {
              const engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.officeNumber
              );

              employees.push(engineer);

              console.log(`${response.name} has been added to the team!`);
            
          if (employees.length < 3) {
            promptUser();
          } else {
            if (employees.length >= 3) {
              if (employees.length >= 5) {
                console.log(`Your team is ready!`);
                fs.writeFile(
                  path.join(DIST_DIR, "team.html"),
                  render(employees),
                  (err) => {
                    if (err) {
                      throw err;
                    }
                    console.log(`Your team is ready!`);
                  }
                );
              } else {
                inquirer
                  .prompt([
                    {
                      type: "confirm",
                      name: "confirm",
                      message: "Would you like to add another team member?",
                    },
                  ])
                  .then((response) => {
                    if (response.confirm) {
                      promptUser();
                    } else {
                      fs.writeFile(
                        path.join(DIST_DIR, "team.html"),
                        render(employees),
                        (err) => {
                          if (err) {
                            throw err;
                          }
                          console.log(`Your team is ready!`);
                        }
                      );
                    }
                  })
                };
              }
            }
          })
        } else if (response.role === "Intern") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
              },
              {
                type: "input",
                name: "id",
                message: "What is the employee's id?",
              },
              {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
              },
              {
                type: "input",
                name: "school",
                message: "What is the employee's school?",
              },
            ])
            .then((response) => {
              const intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
              );
              employees.push(intern);
              console.log(`${response.name} has been added to the team!`);
            
          if (employees.length < 3) {
            promptUser();
          } else {
            if (employees.length >= 3) {
              if (employees.length >= 5) {
                console.log(`Your team is ready!`);
                fs.writeFile(
                  path.join(DIST_DIR, "team.html"),
                  render(employees),
                  (err) => {
                    if (err) {
                      throw err;
                    }
                    console.log(`Your team is ready!`);
                  }
                );
              } else {
                inquirer
                  .prompt([
                    {
                      type: "confirm",
                      name: "confirm",
                      message: "Would you like to add another team member?",
                    },
                  ])
                  .then((response) => {
                    if (response.confirm) {
                      promptUser();
                    } else {
                      fs.writeFile(
                        path.join(DIST_DIR, "team.html"),
                        render(employees),
                        (err) => {
                          if (err) {
                            throw err;
                          }
                        }
                      );
                      console.log(`Your team is ready!`);
                    }
                  });
                }
              }
            }
          })
        }
      });
  }
  createEmployee();
}

promptUser();
