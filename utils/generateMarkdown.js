// function to generate markdown for README
function generateMarkdown(data) {
  let license;
if (data.license == "MIT"){
  license = "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"
}
else if (data.license == "APACHE"){
  license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
else if ( data.license == "GNU GPL V3"){
  license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
else{
  license = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
}
  return `# ${data.title}
  

  
  ${license}



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

To run test use the following command 

> ${data.test}



## Questions

Have any questions? Reach out to me at ${data.email}

`;
}

module.exports = generateMarkdown;
