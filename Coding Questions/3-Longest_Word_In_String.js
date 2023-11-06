function longestWord(text) {
  const words = text.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

const result = longestWord("I Love Coding In JavaScript");
console.log(`Longest word: ${result}`);
