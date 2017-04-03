exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var timeout;
  	var run = function() {
  		console.log(start++);

  		if (start <= end) {
  			timeout = setTimeout(run, 100)
  		};
  	};

  	run();

  	return {
  		cancel: function () {
  			timeout && clearTimeout(timeout);
  		}
  	};

  }
};
