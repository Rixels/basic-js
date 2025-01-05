const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value + "");
    return this;
  },
  removeLink(position) {
    if(position > 0 && position < this.getLength() && typeof position == 'number') {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    var outcome = this.arr.join(' )~~( ');
    this.arr = [];
    return '( ' + outcome + ' )';
  }
};

module.exports = {
  chainMaker
};
