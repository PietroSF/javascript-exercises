/*  check whether a or b is smallest
    smallest is start of index
    c = smallest
    while index < largest, ++
    add index to c
    when index = biggest, add index to c and return c */

const sumAll = function(firstInt, secondInt) {

  if (((typeof secondInt)!='number')||((typeof firstInt)!='number')) {
    return 'ERROR';
  };
  
  if ((firstInt < 0)||(secondInt < 0)) {
    return 'ERROR';
  };

  if (firstInt < secondInt) {
    smallest = firstInt;
    largest = secondInt;
  } else if (firstInt => secondInt) {
    smallest = secondInt;
    largest = firstInt;
  } 
    
  let index = smallest;
  let subtractFix = smallest;

  while (index <= largest) {
    smallest = smallest + index;
    index++;
  }
  return smallest - subtractFix;

};

// Do not edit below this line
module.exports = sumAll;
