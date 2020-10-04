const ones = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

const firstTen = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}

const tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

function parseHundred(number) {
  const firstDigit = number % 10;
  const secondDigit = Math.floor(number / 10) % 10;
  const thirdDigit = Math.floor(number / 100);
  let ret = '';

  switch (secondDigit) {
    case 0:
      ret += ones[firstDigit];
      break;
    case 1:
      ret += firstTen[secondDigit * 10 + firstDigit];
      break;
    default:
      ret += tens[secondDigit] + ' ' + ones[firstDigit];
      break;
  }

  if (thirdDigit !== 0) ret = `${ones[thirdDigit]} hundred ` + ret;

  return ret;
}

function toReadable(number) {
  ret = '';
  if (number === 0) return 'zero';

  ret += parseHundred(number % 1000);
  number = Math.floor(number / 1000);

  if (number !== 0)
  {
    const thousands = parseHundred(number % 1000);
    if (thousands) ret = `${thousands} thousand${number % 10 === 1 ? '' : 's'} ${ret}`;
    number = Math.floor(number / 1000);
  }

  if (number !== 0)
  {
    const millions = parseHundred(number % 1000);
    if (millions) ret = `${millions} million${number % 10 === 1 ? '' : 's'} ${ret}`;
    number = Math.floor(number / 1000);
  }

  return ret.trim();
}

module.exports = toReadable;