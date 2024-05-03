const inquirer = require('inquirer');
// TODO: Include packages needed for this application
const fs = require('fs');
const gmd = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your motivation, why you build? , what problems it solve?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {

        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },

    ];


// TODO: Create a function to initialize app

function init() {
  inquirer
  .prompt(questions)
      .then((response) => {
        console.log ('creating readme...')
    
        fs.writeFile('README.md', gmd.generateMarkdown(response), (error) =>{
          if(error){ 
          return '';
        } console.log('README.md successfully created')
      }
        )
});


}
// Function call to initialize app
init();
