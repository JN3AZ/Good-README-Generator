const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        name:"projectTitle",
        type: "input",
        message: "What is the title of your Project?",
    },
    {
        name: "githubUserName",
        type: "input",
        message: "What is your Github user name?",
    },
    {
        name: "repositoryName",
        type: "input",
        message: "What is the name of your Github repository name?",
    },
    {
        name: "description",
        type: "input",
        message: "What is your description of the main steps of the project?",
    },
    {
        name:"installation",
        type:"input",
        message:"list any software or tools you need to install to build the project"
    },
    {
        name:"usage",
        type:"input",
        message:"Is there anything else you want to clarify or any code snipits you want to provide?" 
    },
    {
        name:"license",
        type:"input",
        message:"what is the license name of your project?" 
    },
    {
        name:"contributing",
        type:"input",
        message:"List all people who contributed to this project?" 
    },
    {
        name:"tests",
        type:"input",
        message:"What was your testing process to get the project running?" 
    },
    {
        name:"troubleshooting",
        type:"input",
        message:"What are FAQ about your project and what are your solutions to common troubleshooting issues?" 
    },
    
])
.then(function (answers){
    const template = `
    
#   Project Title

${answers.projectTitle}

![GitHub repo size](https://img.shields.io/github/repo-size/${answers.githubUserName}/${answers.repositoryName}?logo=github&logoColor=green&style=plastic)

![GitHub followers](https://img.shields.io/github/followers/${answers.githubUserName}) 

![GitHub](https://img.shields.io/github/license/${answers.githubUserName}/${answers.repositoryName}?logo=github&logoColor=green)

##  Table of Contents

*Description
*Installation
*Usage
*License
*Contributing
*Tests
*FAQ & Troubleshooting

##  Description

${answers.description}

##  Installation

${answers.installation}

##  Usage

${answers.usage}

##  License

${answers.license}

##  Contributing

${answers.contributing}

##  Tests

${answers.test}

##  Troubleshooting

${answers.troubleshooting}

    `;
      fs.writeFile("genREADME.md", template, function() {});
});

