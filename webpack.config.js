const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'SoccerPitch.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
