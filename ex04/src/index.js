const milili = [10, 25, 4]; //DO NOT change this line

function myArr(mili) {
  "use strict";
  // Only change code below this
  // Using mili = [4,10,25] would be invalid

  mili[0] = 4;
  mili[1] = 10;
  mili[2] = 25;

  // Only change code above this
  return mili;
}
console.log(myArr(milili)); //Change this line
module.exports = myArr;