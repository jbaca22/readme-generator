
// function to generate markdown for README
function generateMarkdown(filename, data) {
  return `#${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ${data.description}
    ## Table of Contents
    \n #Installation
    \n #Usage
    \n #Contributions
    \n #Tests
    \n #Licenses
    \n #Username
    \n #Email

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributing}

    ## Tests
    ${data.testing}

    ## Licenses 
    This license is covered by the ${data.licenses} license. 

    ## Username
    ${data.username}

    ## Email 
    ${data.email}
`;
}

module.exports = generateMarkdown;
