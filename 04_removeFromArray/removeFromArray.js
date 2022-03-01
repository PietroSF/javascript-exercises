const removeFromArray = function(arrayToRemove, ...arrayToBeRemoved) {
/* filter out arrayToRemove from arrayToBeRemoved */
  arrayToRemove = arrayToRemove.filter(function(item) {
    return !arrayToBeRemoved.includes(item);
  });
  return arrayToRemove;
};
// Do not edit below this line
module.exports = removeFromArray;
