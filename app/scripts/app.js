'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
var app=angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

