const fs = require('fs');

const filename = process.argv[2];
const colourToCount = process.argv[3];

if(filename !== '' || colourToFind !== '') {
	let count = 0;
	const regexp = new RegExp(colourToCount, 'i');

	fs.readFile(filename, (error, colours) => {
		if(error) {
			throw new Error(`Cannot read colours from ${filename}`);
		}

		colours = JSON.parse(colours);

		colours.forEach(colour => {
			if(colour.match(regexp)) {
				count++;
			}
		});

		if(count <= 0) {
			console.log(`Unable to find "${colourToCount}" in ${filename}`);
		} else {
			console.log(`There are ${count} occurences of ${colourToCount} in ${filename}`);
		}
	});

	console.log('Exiting');

} else {
	throw new Error('You must supply a filename and a colour to count!')
}
