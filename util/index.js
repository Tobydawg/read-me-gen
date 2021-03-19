const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMark = require("C:/Users/18182/OneDrive/Desktop/projects/read-me-gen/util/generateMarkdown.js");



function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is the name of your project",
      name: "title",
    },
    {
      type: "input",
      message: "Enter Description",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the installation instructions for this project? Type None if there are none",
      name: "installation",
    },
    {
      type: "input",
      message: "how would you like your application to be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "who contributed to the project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test",
    },
    {
      type: "checkbox",
      message: "Please select a license",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
      name: "license",
    },
    {
      type: "input",
      message: "Who gets the credit?",
      name: "credit",
    },
    {
      type: "input",
      message: "What is your Github?",
      name: "username",
    },
    {
      type: "input",
      message: "your email?",
      name: "email",
    },
  ]);
}

 function init() {
  try {
    promptUser()
    .then(response => {
      console.log("success!");
      fs.writeFileSync('READ.md', genMark(response));
    })
  } catch (err) {
    console.log(err);
  }
}

init();

// async function writeFileAsync() {
//   try {
//     const response = promptUser();
//     const readMe = genMark(response);

//      fs.writeFileAsync("READ.md", readMe);
//     console.log("success!");
//   } catch (err) {
//     console.log(err);
//   }
// }

// writeFileAsync();

// function init() {
//   if (!fs.existsSync(OUTPUT_DIR)) {
//     fs.mkdirSync(OUTPUT_DIR);
//   }

//   fs.writeFileSync(outputPath, render(teamArr), "utf-8");
// }
// };









//old file old file old file

// function generateMarkdown(response) {
//   return `
//         #${response.title}

//         # Table of Contents

//         - [Description](#description)
//         - [Installation](#installation)
//         - [Usage](#usage)
//         - [Contributing](#contributing)
//         - [Test](#test)
//         - [Credits](#credits)
//         - [License](#license)
//         - [Questions](#questions)

//         ## Description:
//         ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

//         ${response.description}
//         ## Installation:
//         ${response.installation}
//         ## Usage:
//         ${response.usage}
//         ## Contributing:
//         ${response.contribution}
//         ## Test:
//         ${response.test}
//         ## Credits:
//         ${response.credit}
//         ## Licsnse:
//          For more information about the License, click on the link below.

//          -[License](https://opensource.org/licenses/${response.license})

//          ## Questions:
//           For questions about the Generator yoiu can go to my Github
//           at the following Link:

//           - [GitHub Profile](https://github.com/)${response.username})

//           For additional questions please reach out to my email at: ${response.email}.
        
//         `;
// 





//OLD FILE

// const inquirer = require('inquirer');
// const fs = require('fs');
// // const util = require('../util/generateMarkdown.js');

// const generateMarkdown = require('./util/generateMarkdown');

// const questions = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name? (Required)',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('Please enter your name!');
//             return false;
//           }
//         }
//       },

//   {
//       type: 'input',
//       name: 'contributions',
//       message: 'How to contribute? (Required)',
//       validate: contributeInput => {
//           if (contributeInput) {
//           return true;
//           } else {
//           console.log('Describe how to contribute!');
//           return false;
//           }
//       }
//       },

//       {
//       type: 'input',
//       name: 'report issues',
//       message: 'How to report issues? (Required)',
//       validate: issueInput => {
//           if (issueInput) {
//           return true;
//           } else {
//           console.log('Describe how to report issues!');
//           return false;
//           }
//       }
//       },

//   {
//           type: 'input',
//           name: 'Installation',
//           message: 'What is the install procedure? (Required)',
//           validate: installInput => {
//               if (installInput) {
//               return true;
//               } else {
//               console.log('Please tell how to insall!');
//               return false;
//               }
//           }
//           },
//       {
//               type: 'input',
//               name: 'Description',
//               message: 'What is the Description? (Required)',
//               validate: descriptionInput => {
//                   if (descriptionInput) {
//                   return true;
//                   } else {
//                   console.log('Please describe your project!');
//                   return false;
//                   }
//               }
//               },
//       {
//               type: 'input',
//               name: 'Title',
//               message: 'Title? (Required)',
//               validate: nameInput => {
//                   if (titleInput) {
//                   return true;
//                   } else {
//                   console.log('Please enter the Title!');
//                   return false;
//                   }
//               }
//               },

//     ]);
//   };
//   questions();

//   function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, function(err){

//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log('success')

//         }

//     })
//  }

//  function init() {
//     inquirer.prompt(questions)
//     .then(function(data) {
//         writeToFile ('README.md', generateMarkdown(data));
//         console.log(data)
//     })

//  }

// init();
