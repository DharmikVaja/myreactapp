console.log(document.cookie);

console.log(document.cookie);
let key = encodeURIComponent(prompt("Enter Your Key"));
let value = encodeURIComponent(prompt("Enter your Value"));
document.cookie = `${key}=${value}`;
console.log(document.cookie);
