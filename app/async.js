exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		var action = $.Deferred();
		setTimeout(function() {
			action.resolve(value);
		}, 10);
		return action.promise();
	},

	manipulateRemoteData: function(url) {
		var action = $.Deferred();

		$.ajax(url).then(function(resp) {
			var people = $.map(resp.people, function(person) {
				return person.name;
			});
			action.resolve(people.sort());
		});

		return action.promise();
	}
};
