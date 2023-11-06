function palandrom(text) {
  const reverseText = text.split("").reverse().join("");
  return reverseText === text;
}

const result = palandrom("TIBIT");
console.log(`This string is a palandrome: ${result}`);
