module.exports = function toReadable(number) {
  let numString = number.toString();
  let result = '';
  for (let i = 0; i <= numString.length; i++) {
    if ((numString.length == 2 && numString[i] == '1') || (numString.length == 3  && i == 1)) {
      let num = numString[i] + numString[i+1];
      if (num == '10') {
        result += 'ten ';
        break;
      }
      if (num == '11') {
        result += 'eleven ';
        break;
      }
      if (num == '12') {
        result += 'twelve ';
        break;
      }
      if (num == '13') {
        result += 'thirteen ';
        break;
      }
      if (num == '14') {
        result += 'fourteen ';
        break;
      }
      if (num == '15') {
        result += 'fifteen ';
        break;
      }
      if (num == '16') {
        result += 'sixteen ';
        break;
      }
      if (num == '17') {
        result += 'seventeen ';
        break;
      }
      if (num == '18') {
        result += 'eighteen ';
        break;
      }
      if (num == '19') {
        result += 'nineteen ';
        break;
      }
    }
    if ((numString.length == 2 && i == 0) || (numString.length == 3 && i == 1)) {
      if (numString[i] == '2') {
        result += 'twenty ';
      }
      if (numString[i] == '3') {
        result += 'thirty ';
      }
      if (numString[i] == '4') {
        result += 'forty ';
      }
      if (numString[i] == '5') {
        result += 'fifty ';
      }
      if (numString[i] == '6') {
        result += 'sixty ';
      }
      if (numString[i] == '7') {
        result += 'seventy ';
      }
      if (numString[i] == '8') {
        result += 'eighty ';
      }
      if (numString[i] == '9') {
        result += 'ninety ';
      }
    }

    if ((i === 0 && numString.length == 1) || (i === 1 && numString.length == 2) || (i === 0 && numString.length == 3) || (i == 2 && numString.length == 3)) {
      if (numString[i] == '0' && numString.length == 1) {
        result += 'zero ';
      }
      if (numString[i] == '1') {
        result += 'one ';
      }
      if (numString[i] == '2') {
        result += 'two ';
      }
      if (numString[i] == '3') {
        result += 'three ';
      }
      if (numString[i] == '4') {
        result += 'four ';
      }
      if (numString[i] == '5') {
        result += 'five ';
      }
      if (numString[i] == '6') {
        result += 'six ';
      }
      if (numString[i] == '7') {
        result += 'seven ';
      }
      if (numString[i] == '8') {
        result += 'eight ';
      }
      if (numString[i] == '9') {
        result += 'nine ';
      }
      if (numString.length == 3 && i != 2) {
        result += 'hundred '
      }
    }
  }
  return result.slice(0,-1);
}

