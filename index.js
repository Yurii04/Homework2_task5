function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i += 1) {
    let pickWord = words[i];
    if (pickWord.length > longestWord.length) {
      longestWord = pickWord;
    }
  }

  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
