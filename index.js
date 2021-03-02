// Inquirer for input //
const inquirer = require('inquirer');

// Generate Markdown file //
const createMarkdown = require('./utils/createMarkdown');
// util for promises //
const util = require('util');

// fs to create file //
const fs = require('fs');


// Variables for prompting questions and inputs using inquirer prompt //
const inputPrompts = ()=> {
    return inquirer
    .prompt([
        // Add questions to create readme //
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for this project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How does one use this projec?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines for this project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please outline the testing instructions.',
            name: 'testing',
        },
        {
            type: "input",
            message: 'Would you like to add an MIT license to this project? Enter yes or no.',
            name: "license",
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        }
    ])
};

// Function to create the README //
const createFile = util.promisify(fs.writeFile);

// Then init function // 
const init = ()=> {
    inputPrompts()
        .then((data) => createFile('README.md', createMarkdown(data)))
        .then(() => console.log('Congratulations, you have successfully created your README file!'))
        .catch((err) => console.log(err));
}

// Call init function //
init();