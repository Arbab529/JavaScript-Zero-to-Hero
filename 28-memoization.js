// ak asi technique hoti ha jis sa application ko fast or efficient kiya jata ha
// jo functions bar bar call ho rahay hotay hain unhain cache kar lata ha

const cache = {};

function calculation(a, b) {
  let result = (a + b) * (a + b) * (a + b) * (a + b);
  return result;
}

function memory(a, b) {
  const key = a + ":" + b;
  if (!cache[key]) {
    let result = calculation(a, b);
    cache[key] = result;
    return result;
  } else {
    console.log("From cache: ", result);
    return cache[key];
  }
}

console.log(memory(2, 3));
