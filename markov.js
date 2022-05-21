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
		return chains;
	}

	/** return random text from chains */

	makeText(numWords = 100) {
		// TODO
	}
}
