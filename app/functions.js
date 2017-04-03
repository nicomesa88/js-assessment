exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(func) {
        return str + ', ' + func;
    }
  },

  makeClosures: function(arr, fn) {
    var arr2 = [];

    var makeFunc= function(value) {
        return function() {
            return fn(value)};
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      arr2.push(makeFunc(arr[i]));
    }

    return arr2;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3)
    };
  },

  useArguments: function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    };

    return sum;
  },

  callIt: function(fn) {
    var arg = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null,arg);
  },

  partialUsingArguments: function(fn) {
    var arg = Array.prototype.slice.call(arguments, 1, arguments.length)
    return function() {
      var arg2 = arg.concat(Array.prototype.slice.call(arguments))
      return fn.apply(null, arg2);
    }
  },

  curryIt: function(fn) {
     function arg(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgs(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return arg(fn, accumulatedArguments);
        }

        return getArgs(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgs([], fn.length);
  }
};
