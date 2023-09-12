function createSvg(text, textColor, shape, shapeColor) {
  let svg = '';

  switch (shape) {
    case 'circle':
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      break;

    case 'triangle':
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="${shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      break;

    case 'square':
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      break;
      case 'heart':
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      break;

    default:
      throw new Error(`Invalid shape: ${shape}`);
  }

  return svg;
}

module.exports = {
  createSvg,
};

  