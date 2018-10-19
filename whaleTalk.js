let input = "And he that hath not, let him sell his coat, and buy a sword.";
const vowels = ['A','E','I','O','U'];

let resultArray = [];

for (let counter = 0; counter < input.length; counter++) {
  /// console.log('counter is ' + counter);
  for (let counter2 = 0; counter2 < vowels.length; counter2++) {
    if (vowels[counter2].toLowerCase() === input[counter].toLowerCase()) {
      /// if vowels found to match, this code will run:
      if (input[counter].toLowerCase() === 'e' || input[counter].toLowerCase() === 'u') {
        resultArray.push(input[counter]);
        resultArray.push(input[counter]);
      } else {
      resultArray.push(input[counter]);
      };
    };
  };
};

console.log(resultArray.join('').toUpperCase());