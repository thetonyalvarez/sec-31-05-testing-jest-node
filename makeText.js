const fs = require("fs");
const process = require("process");
const axios = require("axios");
const MarkovMachine = require("./markov");

const handleOutput = (output) => {
	let mm = new MarkovMachine(output);
	console.log(mm.makeText());
};

const handleFileText = (content) => {
	try {
		handleOutput(content);
	} catch (err) {
		console.error(`Cannot read file ${content}: ${err}`);
		process.exit(1);
	}
};

const handleHtmlText = async (url) => {
	try {
		let res = await axios.get(url);
		handleOutput(res.data);
	} catch (err) {
		console.error(`Error fetching ${url}: ${err}`);
		process.exit(1);
	}
};

let method = process.argv[2];
let output = process.argv[3];

if (method == "url") {
	handleHtmlText(output);
} else if (method == "file") {
	handleFileText(output);
} else {
	console.log("Error");
	process.exit(1);
}
