function findLongestWord(sentence) {
  // Count vowels in a word
  function countVowels(word) {
    const vowels = "aeiou";
    let count = 0;
    for (let char of word) {
      if (vowels.includes(char)) count++;
    }
    return count;
  }

  // covernt sentence to lowerCase then remove any character that is NOT a lowercase letter.
  const cleanedSentence = sentence.toLowerCase().replace(/[^a-z\s]/g, "");
  
  // Split the sentence into an array of words
  const words = cleanedSentence.split(" ");

  let longestWord = "";
  let maxVowel = 0;

  words.map((word) => {
    // If current word is longer than the longest found
    if (word.length > longestWord.length) {
      longestWord = word;
      maxVowel = countVowels(word);
      return;
    }
    // If current word has same length as longest found but has more vowels
    if (word.length === longestWord.length && countVowels(word) > maxVowel) {
      longestWord = word;
      maxVowel = countVowels(word);
      return;
    }
  });
  return longestWord;
}

const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWord(sentence);

console.log(longestWord);


module.exports = findLongestWord;

