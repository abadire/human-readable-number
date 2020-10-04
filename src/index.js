const ones = {
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
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

function toReadable (number) {
  ret = '';
  if (number === 0) return 'zero';

  const oneDigit = number % 10;
  const twoDigits = number % 100 - oneDigit;
  if (twoDigits === 0)
  {
    ret += ones[oneDigit];
  }
  else
  {
    if (twoDigits === 10)
    {
      ret += firstTen[twoDigits + oneDigit];
    }
    else
    {
      ret += `${tens[twoDigits]} ${ones[oneDigit] || ''}`;
    }
  }
  return ret.trim();
}

module.exports = toReadable;

console.log(typeof toReadable(3));
console.log(toReadable(99));
