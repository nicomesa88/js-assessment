exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    var ary = [];

    for (var i = 7; i > -1; i--) {
      ary.push(num &(1 << i) ? 1 : 0)
    };

    return ary.join('')
  },

  multiply: function(a, b) {
    return ((a * 10) * (b * 10)) / 100;
  }
};
