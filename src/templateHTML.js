const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')

function assignRole(allMembers) {
  const managers = [];
  const engineers = [];
  const interns = [];

  for (i = 0; i < allMembers.length; i++) {

    if (allMembers[i] instanceof Manager) {
      managers.push(allMembers[i]);
    } else if (allMembers[i] instanceof Engineer) {
      engineers.push(allMembers[i]);
    } else {
      interns.push(allMembers[i]);
    };
  };
  return {
    'managers': managers,
    'engineers': engineers,
    'interns': interns,
  };
};

function makeMemberHTML(managers, engineers, interns) {
  contentsHTML = [];

  managers.forEach(manager => {
    const managerHTMl =
      `<div id="${manager.getName()}-card" class="container-md member bg-success p-2">
          <div class="member-header text-left">
            <h2>${manager.getName()}</h2>
            <h2 class="">🕵☕  ${manager.getRole()}</h2>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getID()}</li>
            <li class="list-group-item">Contact: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
          </ul>
        </div>`;

    contentsHTML.push(managerHTMl);
  });

  engineers.forEach(engineer => {
    const engineerHTMl =
      `<div id="${engineer.getName()}-card" class="container-md member bg-success p-2">
          <div class="member-header text-left">
            <h2>${engineer.getName()}</h2>
            <h2 class="">🛠👔  ${engineer.getRole()}</h2>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item">Contact: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github Link:  <a href="https://github.com/${engineer.getGithub()}">Github.com/${engineer.getGithub()}</a> </li>
          </ul>
        </div>`;

    contentsHTML.push(engineerHTMl);
  });

  interns.forEach(intern => {
    const internHTML =
      `<div id="${intern.getName()}-card" class="container-md member bg-success p-2">
          <div class="member-header text-left">
            <h2>${intern.getName()}</h2>
            <h2 class="">🎓👔  ${intern.getRole()}</h2>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getID()}</li>
            <li class="list-group-item">Contact: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>`;

    contentsHTML.push(internHTML);
  });

  return contentsHTML;
};

function generateHTML(contentsHTML) {
  const completeTeamHTML =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css" />
      <title>Team Members </title>
    </head>
    <body> 
      <nav> 
        <h1 class="text-center display-4 p-3 mb-2 bg-warning text-dark">Team Profile Generatorz</h1> 
      </nav>    
    <div class="text-center members">
    ${contentsHTML}
    </div>
    </body>
    </html>`;
  fs.writeFile('./dist/index.html', completeTeamHTML, (err) =>
    err ? console.log(err) : console.log('Successfully created your team profile!'));
};

module.exports = {
  assignRole,
  makeMemberHTML,
  generateHTML,
};