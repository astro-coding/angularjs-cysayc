import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';
import './fonts/glyphicons.css';
import './fonts/glyphicons20.css';

// Import your app functionality
import './home';

// Create and bootstrap application
const requires = ['ui.router', 'home'];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
