define([
	'./core',
	'./foo/isFoo'
], function(Emprendedores, isFoo) {

  Emprendedores.isFoo = isFoo;

	return Emprendedores;

});
