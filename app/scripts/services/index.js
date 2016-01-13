import angular from 'angular';
import cartUpdateService from './cartUpdateService.js';
/*Intialize the services module*/
let ngModule = angular.module('sapient.cart.services', []);
ngModule.factory('cartUpdateService', cartUpdateService);
export default ngModule.name;
