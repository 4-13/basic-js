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
class VigenereCipheringMachine {
  #isDirect;

  constructor(isDirect = true) {
    this.#isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.#traverseStr(message, key, this.#charEncrypt);
  }

  decrypt(message, key) {
    return this.#traverseStr(message, key, this.#charDecrypt);
  }

  #charEncrypt(char = '', keyChar = '') {
    const c1 = char.charCodeAt(0) % 65;
    const c2 = keyChar.charCodeAt(0) % 65;
    return String.fromCharCode(((c1 + c2) % 26) + 65);
  }

  #charDecrypt(char = '', keyChar = '') {
    const c1 = char.charCodeAt(0) % 65;
    const c2 = keyChar.charCodeAt(0) % 65;
    return String.fromCharCode(((c1 - c2 + 26) % 26) + 65);
  }

  #traverseStr(message, key, cb) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    const result = [];
    const messageLetters = message.toUpperCase().split('');
    const keyLen = key.length;

    let keyIndex = 0;

    for (const messageChar of messageLetters) {
      if (!/[A-Z]/.test(messageChar)) {
        result.push(messageChar);
      } else {
        result.push(cb(messageChar, key[keyIndex].toUpperCase()));
        keyIndex = (keyIndex + 1) % keyLen;
      }
    }

    if (!this.#isDirect) {
      result.reverse();
    }

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
