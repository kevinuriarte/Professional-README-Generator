//This function returns a license badge based on which license is passed in
//If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license == "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return "";
  }
}

//This function returns the license link
//If there is no license, empty string is returned
function renderLicenseLink(license) {
  if (license == "Apache") {
    return `This project is [Apache](https://choosealicense.com/licenses/apache-2.0/) licensed.`;
  } else if (license == "MIT") {
    return `This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.`;
  } else if (license == "ISC") {
    return `This project is [ISC](https://choosealicense.com/licenses/mit/) licensed.`;
  } else if (license == "GNU") {
    return `This project is [GNU](https://choosealicense.com/licenses/gpl-3.0/) licensed.`;
  } else if (license == "Mozilla") {
    return `This project is [GNU](https://choosealicense.com/licenses/gpl-3.0/) licensed.`;
  } else if (license == "Boost") {
    return `This project is [Boost](https://choosealicense.com/licenses/bsl-1.0/) licensed.`;
  } else {
    return "";
  }

}

//This function returns the license section of the README
//If there is no license, an empty string is returned
function renderLicenseSection(license) {
  if (license == "None") {
    return `This project is unlicensed.`;
  } else {
    return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
  }
};


//This function generates a markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.desc}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License 
  ${renderLicenseSection(data.license)}
  ## Questions
  - GitHub: [${data.username}](${data.link}) 
  - Email: ${data.email}`
}

module.exports = generateMarkdown;