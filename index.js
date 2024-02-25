// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);

    fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Do you want a table of contents?',
      name: 'table',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your usage information?',
      name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License applies to your application?',
        choices: [
            'None',
            'Apache license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'MIT',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are you test instructions?',
      name: 'test',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
      },
    
  ]).then(answers =>{
    console.log(answers);
 //   generateMarkdown(answers);
writeToFile('/dist/README.md', generateMarkdown(answers));
  })
}

// Function call to initialize app
init();
