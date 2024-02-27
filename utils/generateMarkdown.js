// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } else if (license === 'GNU GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    } else if (license === 'BSD 2') {
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
    } else if (license === 'BSD 3') {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    } else if (license === 'Boost Software') {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    } else if (license === 'Creative Commons Zero') {
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
    } else if (license === 'Eclipse') {
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    } else if (license === 'GNU Affero GPL') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_3-blue.svg)]`;
    } else if (license === 'GNU GPLv2') {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPLv2-blue.svg)]`;
    } else if (license === 'Mozilla Public License') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    } else if (license === 'Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    } else if (license === 'None') {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `(https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache 2.0') {
        return `(https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'GNU GPLv3') {
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'BSD 2') {
        return `(https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license === 'BSD 3') {
        return `(https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === 'Boost Software') {
        return `(https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license === 'Creative Commons Zero') {
        return `(https://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license === 'Eclipse') {
        return `(https://opensource.org/licenses/EPL-1.0)`;
    } else if (license === 'GNU Affero GPL') {
        return `(https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (license === 'GNU GPLv2') {
        return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0)`;
    } else if (license === 'Mozilla Public License') {
        return `(https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === 'Unlicense') {
        return `(http://unlicense.org/)`;
    } else if (license === 'None') {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } else {
      return `This project is licensed under the ${license} license. See the [license]${renderLicenseLink(license)} for more information.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};