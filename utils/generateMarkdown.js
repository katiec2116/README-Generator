// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-green.svg)



## Description 
${data.description}



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)




## Installation

To install use the following command

> ${data.install}



## Usage

${data.usage}



## License

${data.license}



## Contributing

${data.contribute}



## Tests

To run tests use the following command 

> ${data.test}



## Questions

Have any questions? Reach out to me at ${data.email}

`;
}

module.exports = generateMarkdown;
