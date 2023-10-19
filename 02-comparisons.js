// equality check ==  and comparison check >, <=, >= works differently
// Comparison converts null to number treat it as 0

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
