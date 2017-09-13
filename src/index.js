
const multiFactorial = (pattern, searchValue) => {
  const value = Number(pattern.substring(0, pattern.indexOf('!')));
  const step = pattern.length - pattern.indexOf('!');
  if (step === 1) {
    let count = 0;
    for (let i = searchValue; ;i *= searchValue) {
      const maxDerivative = value - (value % i);
      if (maxDerivative < i) break;
      count += ((maxDerivative - i) / i) + 1;
    }
    return count;
  }
  if (step === 2) {
    if ((searchValue === 2 && value % 2 === 1)) {
      return 0;
    }
    let count = 0;
    for (let i = value; i >= 1; i -= 2) {
      let j = i;
      while (j % searchValue === 0) {
        count += 1;
        j /= searchValue;
      }
    }
    return count;
  }
  return 0;
};

module.exports = function zeros(expression) {
  const expressions = expression.split('*');
  let numberOf5 = 0;
  let numberOf2 = 0;
  expressions.forEach((value) => {
    numberOf5 += multiFactorial(value, 5);
    numberOf2 += multiFactorial(value, 2);
  });
  return numberOf5 > numberOf2 ? numberOf2 : numberOf5;
};
