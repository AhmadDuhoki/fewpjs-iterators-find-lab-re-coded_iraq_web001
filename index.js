const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(arrObj){
  let findWin = arrObj.find(element => element.result === "W");
  return findWin.year;
}