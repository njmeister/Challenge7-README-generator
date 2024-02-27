// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateLicense = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['Title',
'Description',
'Table of Contents',
'Installation',
'Usage',
'License',
'Contributing',
'Tests',
'Questions'];

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 

        
`${generateLicense.renderLicenseBadge(data.license)}\n\n
# ${data.title}\n\n
            
## Description\n
${data.description}\n\n
            
## Table of Contents\n
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n\n
            
## Installation\n
${data.installation}\n\n
            
## Usage\n
${data.usage}\n\n
            
## License\n
${generateLicense.renderLicenseSection(data.license)}\n\n
            
## Contributing\n
${data.contributing}\n\n
            
## Tests\n
${data.tests}\n\n
            
## Questions\n
Contact me at ${data.email} or visit my [Github](https://github.com/${data.github})\n\n`,

    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md has been created');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your application:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any instructions for installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Describe the application's usage:"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose which license you would like to use:',
            choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'BSD 2', 'BSD 3', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'GNU Affero GPL', 'GNU GPLv2', 'Mozilla Public License', 'Unlicense', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter any instructions to contribute:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your Github username:'
        }
    ])
        .then((data) => {
            writeToFile('README.md', data);
            generateLicense.renderLicenseBadge(data.license);
        });

}

// Function call to initialize app
init();
