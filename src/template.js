const assembleTeam = (team) => {
  const generateEmployee = (employee) => {
    return `
            <div class="card employee-card">
                <div class="employee-card-header"><h1>${employee.getName()}</h1>
                </div>
                <div class="employee-card-body">
                    <ul class="empoyee-info">
                        <li class="employee-id">ID: ${employee.getId()}</li>
                        <li class="employee-email">Email: <a href ="mailto:${employee.getEmail()}"</li>
                        ${
                          employee.getRole() === "Manager"
                            ? `<li class="employee-office-number">Office Number: ${employee.getOfficeNumber()}</li>`
                            : ""
                        }
                        ${
                          employee.getRole() === "Engineer"
                            ? `<li class="employee-github">Github: <a href="${employee.getGithub()}">${employee.getGithub()}</a></li>`
                            : ""
                        }
                        ${
                          employee.getRole() === "Intern"
                            ? `<li class="employee-school">School: ${employee.getSchool()}</li>`
                            : ""
                        }
                    </ul>
                

            </div>
        `;
  };


const htmltemp = [];
    team.forEach(employee => {
        htmltemp.push(generateEmployee(employee), `<hr>`);

    });


return htmltemp.join("");

};

module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
    <div class="team-container">
        <div class="team-header">
            <h1>My Team</h1>
        </div>
        <div class="team-body">
            ${assembleTeam(team)}
        </div>
    </div>
    `;
}