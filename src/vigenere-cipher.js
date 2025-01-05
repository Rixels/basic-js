const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value === undefined || value;
  }
  encrypt(text, per) {
    if (!text || !per) throw new Error();

    if(per.length < text.length) {
      for (var i = 0; ; i += 1) {
        if (text.length == i)
          i = 0;
        if (per.length == text.length)
          break;
        per += per[i];
      }
    }
    var press_text="";

    text = text.toLowerCase();
    per = per.toLowerCase();

    var per_i = 0;
    for (var i = 0; i < text.length; i += 1) {
      if (ALPHABET.includes(text[i])) {
        var x = (ALPHABET.indexOf(text[i]) + ALPHABET.indexOf(per[per_i]))%26
        press_text += ALPHABET[x];
        per_i += 1;
      } else {
        press_text += text[i];
      }
    }
    return this.value ? press_text.toUpperCase() : press_text.split('').reverse().join('').toUpperCase();
  }
  decrypt(text, per) {
    if (!text || !per) throw new Error();

    if(per.length < text.length) {
      for (var i = 0; ; i += 1) {
        if (text.length == i)
          i = 0;
        if (per.length == text.length)
          break;
        per += per[i];
      }
    }
    var natural_text="";

    text = text.toLowerCase();
    per = per.toLowerCase();

    var per_i = 0;
    for (var i = 0; i < text.length && i < per.length; i += 1) {
      if (ALPHABET.includes(text[i])) {
        var x = (ALPHABET.indexOf(text[i]) - ALPHABET.indexOf(per[per_i]) + 26)%26
        natural_text += ALPHABET[x];
        per_i += 1;
      } else {
        natural_text += text[i];
      }
    }
    return this.value ? natural_text.toUpperCase() : natural_text.split('').reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
