import inquirer from 'inquirer';
import fs from 'fs-extra';
import { createSvg } from './svgGenerator.js';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square',],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
];

inquirer
  .prompt(questions)
  .then(async (answers) => {
    const svgContent = createSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
