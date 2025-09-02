const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 👤 Your name here (used for output file)
const name = "Aryan Theng";

// 📁 Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 🧼 Sanitize name to use in filename (remove spaces, lowercase)
const sanitizedFileName = name.toLowerCase().replace(/\s+/g, '_') + '_setup-status.txt';
const outputPath = path.join(outputDir, sanitizedFileName);

// 🔍 Run shell commands and capture output
function getCommandOutput(command) {
  try {
    return execSync(command).toString().trim();
  } catch (err) {
    return 'Not Found';
  }
}

const versions = {
  node: getCommandOutput('node -v'),
  npm: getCommandOutput('npm -v'),
  git: getCommandOutput('git --version'),
  gitUser: getCommandOutput('git config user.name'),
  gitEmail: getCommandOutput('git config user.email'),
};

const output = `
✅ Setup Status Report for ${name}

Node.js version: ${versions.node}
npm version:     ${versions.npm}
Git version:     ${versions.git}
Git Username:    ${versions.gitUser}
Git Email:       ${versions.gitEmail}

✔️ All tools installed correctly if values above are filled.
`;

fs.writeFileSync(outputPath, output);
console.log(`✅ ${sanitizedFileName} has been generated in the "output" folder.`);
