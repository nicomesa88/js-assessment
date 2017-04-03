exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 0;
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        count++;
        if (count < amount) {
          newStr += str[i];
        }
      } else {
        count = 0;
        newStr += str[i];
      }
    };

    return newStr;
  },

  wordWrap: function(str, cols) {
    var formatedString = '';
    var wordsArray = [];

    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatedString += '\n' + wordsArray[i];
        } else {
          if (formatedString.length + wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    };

    return formatedString;
  },

  reverseString: function(str) {
    var newStr = ''

    for (var i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    };
    return newStr;
  }
};
