function hasTargetSum(array, target) {
  newArr = array.length;
  let secondArr = []
  let comparativeArr = [];
  for(let i=0; i<array.length; i++){
    comparativeArr.push(array[i])
    for(let j=0; (j<array.length); j++){
      if(i != j){
        if(array[i]+array[j] === target){
          return true;
        }
      }
    }
  }
  return false;
  }
  



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 1, 5], 4));
}

module.exports = hasTargetSum;
