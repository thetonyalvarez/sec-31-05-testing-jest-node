const MarkovMachine = require("./markov");

describe("markov machine", function () {
	let mm;

	beforeEach(function () {
		mm = new MarkovMachine("the cat in the hat");
	});

	test("should make chains", function () {
		expect(mm.chains).toEqual({
			the: ["cat", "hat"],
			cat: ["in"],
			in: ["the"],
			hat: [],
		});
	});

	test("should get random item from array", function () {
		let array = Object.keys(mm.chains);
		let randomChoice = MarkovMachine._getRandomKey(array);

		expect(array).toContain(randomChoice);
	});

	test("should return correct number of words passed into makeText() function", function () {
		let result_a = mm.makeText(100);
		let result_b = mm.makeText(3);
		let result_c = mm.makeText(0);

		expect(result_a.split(" ").length).toBe(100);
		expect(result_b.split(" ").length).toBe(3);
		expect(() => result_c).toThrowError;
	});
});
