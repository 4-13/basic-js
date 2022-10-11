const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === null ? 'null' : value.toString());
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position - 1 >= this.chain.length ||
      position <= 0
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    position -= 1;
    this.chain = [
      ...this.chain.slice(0, position),
      ...this.chain.slice(position + 1),
    ];
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.map((el) => `( ${el} )`).join('~~');
    this.chain.length = 0;
    return res;
  },
};

module.exports = {
  chainMaker,
};
