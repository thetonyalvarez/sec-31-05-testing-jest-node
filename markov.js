/** Textual markov chain generator */

class MarkovMachine {
	/** build markov machine; read in text.*/

	constructor(text) {
		let words = text.split(/[ \r\n]+/);
		this.words = words.filter((c) => c !== "");
		this.makeChains();
	}

	/** set markov chains:
	 *
	 *  for text of "the cat in the hat", chains will be
	 *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	makeChains() {
		let chains = {};
		let words = this.words;
		for (let i = 0; i < words.length; i++) {
			let word = words[i];

			// if word doesn't exist in chains, then create an empty key/value pair
			if (!chains[word]) {
				chains[word] = [];
			}

			// if there is a word that follows our curr word, then push that word to our curr word's value arr
			if (words[i + 1]) {
				chains[word].push(words[i + 1]);
			}
		}
		this.chains = chains;
	}

	/** return random text from chains */

	// need a helper function to randomize choice
	static _getRandomKey(inputArr) {
		return inputArr[Math.floor(Math.random() * inputArr.length)];
	}

	makeText(numWords = 100) {
		let chains = this.chains;
		let result = [];

		let words = Object.keys(chains);
		let word = MarkovMachine._getRandomKey(words);

		while (result.length < numWords && word !== null) {
			result.push(word);
			word = MarkovMachine._getRandomKey(words);
		}
		console.log(words);
		console.log(word);
		console.log(result.join(" "));
		return result.join(" ");
	}
}

module.exports = MarkovMachine;
