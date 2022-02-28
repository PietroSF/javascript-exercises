const reverseString = function(rvString) {
/*  take string
    turn into array
    reverse array
    turn back into string */

  const strArray = [...rvString];
  const rvArray = strArray.reverse();
  return reversedString = rvArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
