function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "That's not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");


const str = "My Name is Anthony";

console.log(reverse(str));
console.log(reverse2(str));
console.log(reverse3(str));
