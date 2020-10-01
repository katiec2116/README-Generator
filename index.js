const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


inquirer.prompt([
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license does it have?",
        name: "license",
        choices: ['MIT',
            "APACHE",
            "GNU GPL V3",
            "Eclipse Public License 1.0"]

    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing?",
        name: "contribute",
    }
])

.then(function (data) {
    // create a legit filename
    var filename = "README-2.md"; 

    fs.writeFile(filename, generateMarkdown(data), function(err){
        if (err) {
            return console.log(err)
        }
        console.log("Success!")
    })
});