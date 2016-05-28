define([
	'./var/author',
	'./var/toString'
], function(author, toString) {

	var Emprendedores = function(name) {
		return new Emprendedores.fn.init(name);
	};


  Emprendedores.fn = Emprendedores.prototype = {

    version: '$VERSION',
    author: author,

		constructor: Emprendedores,


		init: function(name) {
			this.name = toString.call(name);
			return this;
		}


	};


  Emprendedores.fn.init.prototype = Emprendedores.fn;  // 这是最重要的一行，实现继承

	return Emprendedores;
});
