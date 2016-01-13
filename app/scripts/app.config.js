import angular from 'angular';
import 'angular-local-storage';
import servicesModule from './services/index.js';
import componentsModule from './components/index.js';
import filtersModule from './filters/index.js';

let ngModules = [servicesModule, componentsModule, filtersModule,'sapient.cart.templates','LocalStorageModule'];

export {ngModules};