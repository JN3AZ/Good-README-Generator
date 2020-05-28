const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        name:"name",
        type: "input",
        message: "What is your name?",
    },
    {
        name: "aboutMe",
        type: "input",
        message: "What is something interesting about you?",
    },
    {
        name: "email",
        type: "input",
        message: "Please provide a good email to contact you",
    },
])
.then(function ({ name, aboutMe, email }){
    const template = `
    # ${name}

    ## About Me

    ${aboutMe}

    ## Contact Me

    ${email}
    
    `;
      fs.writeFile("README.md", template, function () {});
});










// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
