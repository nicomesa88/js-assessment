exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function(arr, item) {
		for (var i = 0; i < arr.length; i++) {
			if (item === arr[i]) {
				var location = i;
			}
		}
		if (typeof location === 'undefined') {
			location = -1;
		}
		return location;
	},

	sum: function(arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	},

	remove: function(arr, item) {
		var newArray = arr.filter(function(remove) {
			return (remove !== item)
		});

		return newArray;
	},

	removeWithoutCopy: function(arr, item) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				arr.splice(i, 1);
				i--;
			}
		}

		return arr;
	},

	append: function(arr, item) {
		arr.push(item);
		return arr;
	},

	truncate: function(arr) {
		var item = arr.length - 1;
		arr.pop(item);
		return arr;
	},

	prepend: function(arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail: function(arr) {
		var item = arr[0]
		arr.shift(item);
		return arr;
	},

	concat: function(arr1, arr2) {
		var arr3 = arr1.concat(arr2);
		return arr3
	},

	insert: function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
	},

	count: function(arr, item) {
		var counter = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				counter++;
			}
		};
		return counter;
	},

	duplicates: function(arr) {
		var seen = {};
		var dupes = [];

		for (var i = 0; i < arr.length; i++) {
			seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
		}

		for (var item in seen) {
			if (seen.hasOwnProperty(item) && seen[item] > 1) {
				dupes.push(parseFloat(item));
			}
		}

		return dupes;
	},

	square: function(arr) {
		return arr.map(function(sq) {
			return sq * sq;
		});
	},

	findAllOccurrences: function(arr, target) {
		var itemIndex = [];
		arr.forEach(function(elm, index) {
			if (elm === target)
				itemIndex.push(index);
		});
		return itemIndex;
	}
};
