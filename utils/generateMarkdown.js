// Function to generate a license badge based on provided license
function createLicenseBadge(license) {
  if (license && license !== "none") {
    return `![License Badge](https://img.shields.io/badge/License-${license}-purple.svg)`;
  }
  return "";
}

// Function to create markdown for README
function craftMarkdown(data) {
  return `# ${data.title} 
${createLicenseBadge(data.license)}
  
## Overview
- **Description**: ${data.description}
- **Deployment**: [View Application](${data.link})
- **Screenshot**: ![Screenshot](${data.screenshot})
  
## Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Application Usage](#application-usage)
- [Team](#team)
- [Tests](#tests)
- [Queries](#queries)
  
## Features

${data.features}
  
## Tech Stack

**Dependencies**: ${data.require}
  
## Application Usage

${data.usage}
  
## Team

**Lead**: ${data.creator}
**Contributors**: ${data.contributors}
  
## Tests

${data.test}
  
## Queries
For any questions or feedback, [email us](mailto:${data.email}?subject=[GitHub]%20Project%20Query) or visit the [project lead's GitHub](https://github.com/${data.creator}).
`;
}

module.exports = craftMarkdown;
