// Array = [2,5,1,2,3,5,1,2,4]
// This should return 2

// Array = [2,1,1,2,3,5,1,2,4]
// This should return 1

// Array = [2,3,4,5]
// This should return undefined

const firtRecurringChar = input => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      if(input[i] === input[j]){
        return console.log(input[i]);
      }
    }
  }
  return undefined;
} //O(n^2)

const firtRecurringChar1 = input => {
  let map = {};
  for(let i = 0; i< input.length; i++) {
    if(map[input[i]]) {
      return console.log(input[i]);;
    } else {
      map[input[i]] = true;
    }
    console.log(map);
  }
  return undefined;
} // O(n)

firtRecurringChar([2,1,1,2,3,5,1,2,4]);
firtRecurringChar1([2,1,1,2,3,5,1,2,4]);