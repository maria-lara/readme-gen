// create markdown function //

const createMarkdown = (data) =>
    
    `# ${data.title}
    
## Description
${data.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

 ## Installation Instructions
${data.installation}
    
## How-To
${data.usage}
    
## Contributors
${data.contribution}
    
## Testing 
${data.testing}
    
## License
License: ${data.license}.
    
## Questions
* For questions, feedback, or comments, please contact ${data.email}.

* Feel free to check out more of my work at: https://github/com/${data.username}/.
`;

module.exports = createMarkdown; 