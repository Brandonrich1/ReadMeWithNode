//node modules TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


//generate questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => { if (titleInput) {return true;} else {console.log('Plese enter a value:'); return false;}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license for your project?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput=() => {if (licenseInput) {return true;} else {console.log('Please select a license.'); return false;}}
    },  
    {
        type: 'input',
        name: 'test',
        message: 'How will you test your project?',
        validate: testingInput => { if (testingInput) {return true;} else {console.log('Plese explain how to test your project.'); return false;}}
    },  
    {
        type: 'input',
        name: 'usage',
        message: 'How do you intend for your project to be used?',
        validate: usageInput => { if (usageInput) {return true;} else {console.log('Plese explain:'); return false;}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'Add your gitHub user name.',
        validate: githubInput => { if (githubInput) {return true;} else {console.log('Plese enter your GitHub username:'); return false;}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What your e-mail address?',
        validate: emailInput => { if (emailInput) {return true;} else {console.log('Plese enter your email:'); return false;}}
    },
    {
        type: 'input',
        name: 'controbutions',
        message: 'Who has contributed to your project?',
        validate: controbutionsInput => { if (controbutionsInput) {return true;} else {console.log('Plese enter a value:'); return false;}}
    },
];

//function to write the readme file.
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        console.log (fileContent)
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

//initilize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer){
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    });
}

//call function init
init();

module.exports = questions;





// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
