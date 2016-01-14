import angular from 'angular';
import servicesModule from './services/index.js';
import componentsModule from './components/index.js';
import filtersModule from './filters/index.js';

let ngModules = [servicesModule, componentsModule, filtersModule,'sapient.cart.templates','angularModalService'];

export {ngModules};