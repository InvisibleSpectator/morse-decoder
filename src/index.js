const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let string = "";
  let tmp = "";
  let j = 0;
  for (let j = 0; j < expr.length; j += 10) {
    let mass = expr.slice(j, j + 10);
    if (mass[0] == "*")
      string += " ";
    else {
      for (let i = mass.indexOf("1"); i < mass.length; i += 2) {
        if (mass[i + 1] == "0")
          tmp += ".";
        if (mass[i + 1] == "1")
          tmp += "-";
      }
      string += MORSE_TABLE[tmp];
      tmp = "";
    }
  }
  return string;
}

module.exports = {
  decode
}
