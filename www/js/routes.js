angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home', {
    url: '/page3',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('recuperarSenha', {
    url: '/page4',
    templateUrl: 'templates/recuperarSenha.html',
    controller: 'recuperarSenhaCtrl'
  })

  .state('novoCadastro', {
    url: '/page5',
    templateUrl: 'templates/novoCadastro.html',
    controller: 'novoCadastroCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});