const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const { rejects } = require('assert');
const { resolve } = require('path');


// array of questions for user
const questions = data => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please give a description on how to install the application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'provide instructions or examples for use of the project'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'please offer instructions on how to contribute to this project, if any.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'please write or paste tests for your application'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'please select any license that your project uses, if any',
            choices: ['MIT','GNU GPLv3','UNLICENSE','APACHE LICENSE 2.0',]
        },
        {
            type: "input",
            name: "licenseUrl",
            message: "provide License url ",
        },
        {
            type: 'input',
            name: 'username',
            message: 'please enter your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email address'
        }
    ])
};

// function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/READme.md',generateMarkdown, err => {
        if (err) {
            rejects(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File Created!'
        })
    });
};

// function to initialize program
function init(data) {
   questions()
   
}

// function call to initialize program
init()

