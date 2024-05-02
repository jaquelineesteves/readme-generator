// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

console.log(renderLicenseBadge('MIT'));
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {

// 'MIT'  badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
// 'APACHE 2.0'  badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
// 'GPL 3.0' badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
// 'BSD 3'  badge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![${data.license}](${renderLicenseBadge(data.license)})
  
  ## Description 
   ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
   ## Installation 
  To install necessary dependencies, run the following command:

\`\`\`
   ${data.installation}

\`\`\`

  ## Usage
  ${data.usage}


  ## License 
  ${data.license}  

  ## Contributing  
  ${data.contributing}

  ## Tests
  To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).`;
}

module.exports = {generateMarkdown};
