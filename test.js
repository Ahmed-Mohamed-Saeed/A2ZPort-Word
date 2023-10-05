const assert = require("chai").assert;

const findLongestWord = require("./findLongestWord.js");

describe("Find Longest Word Tests", function () {
  it('should return "experience" for the sample sentence', function () {
    const sentence =
      "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
    assert.equal(findLongestWord(sentence), "experience");
  });

  it('should return "appleeee" when the longest word at the begining', function () {
    const sentence = "appleeee banana cherry";
    assert.equal(findLongestWord(sentence), "appleeee");
  });

  it('should return "banana" when the longest word is in the middle', function () {
    const sentence = "apple banana cherry";
    assert.equal(findLongestWord(sentence), "banana");
  });

  it('should return "cherryyyyy" when the longest word is at the end', function () {
    const sentence = "apple banana cherryyyyy";
    assert.equal(findLongestWord(sentence), "cherryyyyy");
  });

  it('should return "banana" when the sentence contains special characters and numbers', function () {
    const sentence = "apple823123 banana cherry@#$%";
    assert.equal(findLongestWord(sentence), "banana");
  });

  it("should return an empty string for empty input", function () {
    assert.equal(findLongestWord(""), "");
  });
});
