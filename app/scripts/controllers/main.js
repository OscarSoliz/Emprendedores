'use strict';

/**
 * @ngdoc function
 * @name emprendedoresApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emprendedoresApp
 */

/*
{
 id_persona: 1,
 nombre: 'Walter',
 apellido: 'Sanchez',
 ci: 4869237,
 lugar_de_nacimiento: 'Santa Cruz',
 direccion: 'Av. Alemana #4420',
 sexo: 'Masculino',
 id_emprendedor: 1,
 celular: 74895923,
 correo: 'sanchezito@hotmail.com',
 anho_graduado: 2000,
 carrera: 'Ingenieria de Sistemas',
 id_universidad: 1 }
 */


angular.module('emprendedoresApp')
  .controller('MainCtrl', ["$http","$scope",function ($scope,$http) {
   $scope.guardar = function(){
   	console.log("hola");
   	alert("hola");
   }



  }]);
