/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(atSomeone){
  return atSomeone + "!"
}

function getFirstCharacter(params0) {
  return params0[0];
}

function getLastCharacter(params9) {
  return params9[params9.length + -1]
}

function getOneCharacter(params1, num1) {
  return params1[num1];
}

function getTwoCharacters(params2, num1, num2) {
  return params2[num1] + params2[num2];
}

function makeCapitalized(params3) {
  return params3.toUpperCase();
}

function yellLouder(params4) {
  return params4.toUpperCase() + "!!!"
}

function getInitials(params5) {
  const initial = params5.indexOf(' ')
  return params5[0] + "." + params5[initial + 1] +"."
}



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
