isValidFirstCharacter = (parenthesesArray) =>
  parenthesesArray.length !== 0 && parenthesesArray[0] !== ")";

isParenthesesArraySymmetric = (parenthesesArray) => {
  let stack = [];
  for (let char of parenthesesArray) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.length === 0;
};

balancedParentheses = (inputString) => {
  const parenthesesRegex = /[()]/g;

  let parenthesesArray = inputString.match(parenthesesRegex);

  if (!isValidFirstCharacter(parenthesesArray)) {
    return false;
  }

  return isParenthesesArraySymmetric(parenthesesArray);
};
module.exports = balancedParentheses;