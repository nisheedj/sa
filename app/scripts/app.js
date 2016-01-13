import angular from 'angular';
import {ngModules} from './app.config';
/*initialize the module*/
let ngModule = angular.module('sapient.cart', ngModules);

angular.element(document).ready(function() {
  angular.bootstrap(document, [ngModule.name]);
});
