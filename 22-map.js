//! map k through b hum object hi bnatay hain but ya ak advance object hota ha and more features hotay hain

const data = new Map([
  ["name", "Arbab"],
  ["age", "10"],
]);

console.log(data);
console.log(data.get("name"));
data.set("city", "karachi");
console.log(data);
console.log(data.keys());
console.log(data.values());
console.log(data.has("name"));

data.forEach((value, key) => {
  console.log(key, ": ", value);
});

for (d of data) {
  console.log(`${d[0]}: ${d[1]}`);
}
