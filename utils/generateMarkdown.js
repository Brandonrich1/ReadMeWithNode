const fs = require('fs');
const inquirer = require('inquirer');
const index = require ('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  let badge = '';
  if(license === 'MIT') {
    badge = '![GitHub License](https://img.shields.io/github/license/Brandonrich1/ReadMeWithNode)'
  } else if (license === 'Apache 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License](https://img/shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

function generateMarkdown(answer) {

  return`
  ## ${answer.title} \n 
  ### [${renderLicenseSection(answer.license)}](${renderLicenseLink(answer.license)}) ${renderLicenseBadge(answer.license)}

  ## TABLE OF CONTENTES:
  ### * [license](#license)
  ### * [Usage](#usage)  
  ### * [Tests](#tests)
  ### * [contributors](contributors)
  ### * [email](#email)
  ### * [github](github)
  
  ## USEAGE:
  ## The intended use for this projects is:
  ### ${answer.usage}

  ## TESTS: 
  ### Test this app by running "node index.js".
  ### ${answer.test}

  ## Contributors
  ### Who contributed:
  ### ${answer.controbutions}

  ## My Email:
  ### ${answer.email}

  ## My GitHub:
  ### ${answer.github}
`;
}

//exports
module.exports = generateMarkdown;
