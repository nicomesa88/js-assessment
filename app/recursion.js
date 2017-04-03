exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesList = [];
    var dirs = [];

    var dirAction = function (dir) {
      var files = dir.files;
      dirs.push( dir.dir );

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            filesList.push(files[i]);
          }
        } else {
          dirAction(files[i]);
        }
      }

      dirs.pop();
    }

    dirAction(data);


    return filesList;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function result() {
      answer.push(
        temp.slice()
      );
    }

    function run() {
      for (var i = 0; i < arr.length; i++) {
        var item = arr.splice(i, 1)[0];
        temp.push(item);
        if (arr.length) {
          run();
        } else {
          result();
        }
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return run();
  },

  fibonacci: function(n) {
    var x = 0;
    var y = 1;

    if(n <= 2) {
      return n-1;
    }
    for(var i = 1; i < n; i++) {
      var tempY = y; y = tempY + x; x = tempY
    };

    return y;
  },

  validParentheses: function(n) {
    if (n < 1) {
      return []
    } else if (n === 1) {
      return ['()']
    } else {
      var comboPar = {};
      var innerCombos = this.validParentheses(n-1);

      for (var i=0; i<innerCombos.length; i++) {
        var curInnerCombo = innerCombos[i];

        comboPar['(' + curInnerCombo + ')'] = true;
        comboPar['()' + curInnerCombo] = true;
        comboPar[curInnerCombo + '()'] = true;
      }

      var comboList = [];

      for (var combo in comboPar) {
        if (comboPar.hasOwnProperty(combo)) {
          comboList.push(combo);
        }
      }

      return comboList;
    }
  }
};
