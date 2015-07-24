// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var apps=angular.module('starter', ['ionic', 'starter.toggleCtrl']);
// var parameters = window.location.href;
//       var temp = parameters.split("=");
//       var SubMenuMenuName= unescape(temp[1]);
//       alert(SubMenuMenuName);


      
// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs).
//     // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
//     // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
//     // useful especially with forms, though we would prefer giving the user a little more room
//     // to interact with the app.
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       // Set the statusbar to use the default style, tweak this to
//       // remove the status bar on iOS or change it to use white instead of dark colors.
//       StatusBar.styleDefault();
//     }
//   });
// })
apps.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
      $stateProvider
      .state('mainMenu', {
        url: '/',
        templateUrl: 'pages/mainMenu.html',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'pages/menu.html'
      })
      .state('subMenu', {
        url: '/menu/=:id',
        templateUrl: 'pages/subMenu.html'
      })
      .state('subMenuItem', {
        url: '/subMenuItem/=:id',
        templateUrl: 'pages/subMenuItem.html'
      })

      //Author Pravinkumar on 23/7/2017
      //login
      .state('logIn', {
        url: '/logIn',
        templateUrl: 'pages/logIn.html'
      })
      //Author Pravinkumar on 23/7/2017
      //signUp
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'pages/signUp.html'
      })
    //Author Pravinkumar on 23/7/2017
    //contactUs
      .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'pages/contactUs.html'
        })
      //Author Pravinkumar on 23/7/2017
    //location
      .state('mapLocation', {
        url: '/mapLocation',
        templateUrl: 'pages/mapLocation.html',
      })
      //Author Pravinkumar on 23/7/2017
      //location
      .state('latestOffer', {
        url: '/latestOffer',
        templateUrl: 'pages/latestOffer.html',
      })
      //Author Pravinkumar on 24/7/2017
      //latestoffer
      .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'pages/aboutUs.html',          
      })
    })
