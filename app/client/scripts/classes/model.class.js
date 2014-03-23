var cmi = require('../cmi');

module.exports = cmi.class.base.extend(function () {

}).methods({

	addListeners: function () {
		var self = this,
			cb = function (_method) {
				return function () {
					self[_method].apply(self, arguments);
				}
			};
		this.model.on('preget', cb('preget'));
		this.model.on('get', cb('get'));
		this.model.on('presave', cb('presave'));
		this.model.on('save', cb('save'));
		this.model.on('predestroy', cb('predestroy'));
		this.model.on('destroy', cb('destroy'));
	},

	preget: function () {},

	get: function () {
		cmi.helpers.scope.apply();
	},

	presave: function () {
		// cmi.scope.loading = true;
	},

	save: function () {
		cmi.helpers.scope.apply();
	},

	predestroy: function () {
		// cmi.scope.loading = true;
	},

	destroy: function () {
		cmi.helpers.scope.apply();
	}

});