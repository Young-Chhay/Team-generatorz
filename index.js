const inquirer = require('inquirer');
const { assignRole, makeMemberHTML, generateHTML } = require('./src/templateHTML');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// Create array to store each team member information.
const allMembers = [];

var addMore = {
    type: 'list',
    name: 'options',
    message: 'Please select below options to add Manager, Enginner, itern  or  select done to finish building?',
    choices: ['Add Engineer', 'Add Intern', 'Done building team'],
};

var managerQuestion = [
    {
        type: 'input',
        name: 'manager_name',
        message: 'Please enter the manager name for this team?',
    },
    {
        type: 'input',
        name: 'manager_Id',
        message: 'Please enter your employee ID?',
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'Please enter email address for manager?',
    },
    {
        type: 'input',
        name: 'office_Number',
        message: 'Please enter the manager office number?',
    },
];

var engineerQuestion = [
    {
        type: 'input',
        name: 'engineer_Name',
        message: 'Please enter the engineer name?',
    },
    {
        type: 'input',
        name: 'engineer_Id',
        message: 'Please enter your employee ID?',
    },
    {
        type: 'input',
        name: 'engineer_Email',
        message: 'Please enter email address for engineer?',
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Please enter your github user name ?',
    },
];

var internQuestion = [
    {
        type: 'input',
        name: 'intern_Name',
        message: 'Please enter the Intern name?',
    },
    {
        type: 'input',
        name: 'intern_Id',
        message: 'Please enter your employee ID?',
    },
    {
        type: 'input',
        name: 'intern_email',
        message: 'Please enter email address for intern?',
    },
    {
        type: 'input',
        name: 'schoolName',
        message: 'Please enter your school Name ?',
    },
];

function startQuestions() {
    inquirer.prompt(managerQuestion).then((managerAnswer) => {
        const manager = new Manager(managerAnswer.manager_name, managerAnswer.manager_Id, managerAnswer.manager_email, managerAnswer.office_Number)
        allMembers.push(manager);
        console.log(allMembers);
        continueQuestions();
    });
};

function setEngineerQuestion() {
    inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
        const engineer = new Engineer(engineerAnswer.engineer_Name, engineerAnswer.engineer_Id, engineerAnswer.engineer_Email, engineerAnswer.githubName)
        allMembers.push(engineer);
        console.log(allMembers);
        continueQuestions();
    });
};

function setInternQuestion() {
    inquirer.prompt(internQuestion).then((internAnswer) => {
        const intern = new Intern(internAnswer.intern_Name, internAnswer.intern_Id, internAnswer.intern_email, internAnswer.schoolName)
        allMembers.push(intern);
        console.log(allMembers);
        continueQuestions();
    });
}
function continueQuestions() {

    inquirer.prompt(addMore).then((answer) => {

        switch (answer.options) {
            case 'Add Engineer':
                setEngineerQuestion();
                break;
            case 'Add Intern':
                setInternQuestion();
                break;
            case 'Done building team':
                let role = assignRole(allMembers)
                makeMemberHTML(role.managers, role.engineers, role.interns);
                generateHTML(contentsHTML.join(''));                
                // generateHTML();
                break;
                // exit (0) means success
                // exit(0);
                // break;
                // default in case nothing is selected and exit(1) means failure
            // default:
            //     exit(1);
            //     break;
        };
    });
}

startQuestions();
