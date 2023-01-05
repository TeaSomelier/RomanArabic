const inputArabic = document.getElementById('inputArabicNumber');
const inputRoman = document.getElementById('inputRomanNumber');

inputArabic.addEventListener(
  'input',
  (e) => (inputRoman.value = fromArabicToRoman(e.target.value))
);

inputRoman.addEventListener(
  'input',
  (e) => (inputArabic.value = fromRomanToArabic(e.target.value))
);

// Roman to Arabic   --------------------------------------------------

function fromRomanToArabic(string) {
  if (string.match(/\d+/)) {
    return "Not Roman's symbols!";
  }

  const stringForArray = String(string);
  const array = stringForArray.split('');

  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'I') {
      if (
        (i + 1 < array.length && array[i + 1] === 'V') ||
        (i + 1 < array.length && array[i + 1] === 'X')
      ) {
        answer -= 1;
      } else {
        answer += 1;
      }
    } else if (array[i] === 'V') {
      answer += 5;
    } else if (array[i] === 'X') {
      if (
        (i + 1 < array.length && array[i + 1] === 'L') ||
        (i + 1 < array.length && array[i + 1] === 'C')
      ) {
        answer -= 10;
      } else {
        answer += 10;
      }
    } else if (array[i] === 'L') {
      answer += 50;
    } else if (array[i] === 'C') {
      if (
        (i + 1 < array.length && array[i + 1] === 'D') ||
        (i + 1 < array.length && array[i + 1] === 'M')
      ) {
        answer -= 100;
      } else {
        answer += 100;
      }
    } else if (array[i] === 'D') {
      answer += 500;
    } else {
      answer += 1000;
    }
  }
  return !inputRoman.value ? '' : answer;
}

// Arabic to Roman --------------------------------------------------

const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const romanValue = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

function fromArabicToRoman(string) {
  if (isNaN(string)) {
    return "Not Arabic's symbols!";
  }

  let result = '';
  decimalValue.map((item, index) => {
    while (item <= string) {
      result += romanValue[index];
      string = string - item;
    }
  });
  return result;
}
