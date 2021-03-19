
function generateMarkdown(response) {
  return `
        # ${response.title}

        # Table of Contents

        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Test](#test)
        - [Credits](#credits)
        - [License](#license)
        - [Questions](#questions)

        ## Description:
        ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

        ${response.description}
        
        ## Installation:
        ${response.installation}

        ## Usage:
        ${response.usage}
        
        ## Contributing:
        ${response.contribution}
       
        ## Test:
        ${response.test}
       
        ## Credits:
        ${response.credit}
       
        ## Licsnse:
         For more information about the License, click on the link below.

         -[License](https://opensource.org/licenses/${response.license})

         ## Questions:
          For questions about the Generator you can go to my Github
          at the following Link:

          - [GitHub Profile](https://github.com/)${response.username})

          For additional questions please reach out to my email at: ${response.email}.
        
        `;
}
module.exports = generateMarkdown;



// function generateMarkdown(response) {
//   `
// // # ${(data, title)}
// // https://github.com/${data.username}/${data.title}
// // # Description
// // ${data.description}
// // # Table of Contents
// // [Installation](#intallation)
// // [Usage](#usage)
// // [License](#license)
// // [Contributing](#contributing)
// // [Tests](#tests)
// // [Questions](#questions)
// // # Installation
// // The following necessary dependencies must be installed to run the application
// // # Usage
// // In order to use this applicationCache, ${data.Usage}
// // # License
// // This project is licensed under the ${data.License} license.
// // ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
// // # Contributing
// // Contributors: ${data.Contributing}
// // # Tests
// // The following is needed to run the test: ${data.Tests}
// // # QuestionsIf you have any questions about the Repo, open an issue or contact ${
// //     data.Username
// //   }
// // `;
// // }