var app = require('../app');

module.exports = app.class.moldy.extend({

	init: function () {
		this.name = 'event';
		this._super();
	}

});