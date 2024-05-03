
function renderLicenseLink(license) {
if(license !== 'None'){
  let licenseChosen = license
  let licensenospace = licenseChosen
  .split(" ")
  .join("");

  return `![${license}](https://img.shields.io/static/v1?label=License&message=${licensenospace}&color=blue)`
}
 else return ''

}

function renderLicenseSection(license) {
  if(license !== 'None'){

    return `This project is licensed under ${license} license`
  }
   else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseLink(data.license)}
  
  ## Description 
   ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
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
  ${renderLicenseSection(data.license)}  


  ## Tests
  To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).`;
}

module.exports = {generateMarkdown};
