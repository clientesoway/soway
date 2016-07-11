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

  .state('sobreAFAMBRAS', {
    url: '/page7',
    templateUrl: 'templates/sobreAFAMBRAS.html',
    controller: 'sobreAFAMBRASCtrl'
  })

  .state('certificaOHalal', {
    url: '/page9',
    templateUrl: 'templates/certificaOHalal.html',
    controller: 'certificaOHalalCtrl'
  })

  .state('sobreACibalHalal', {
    url: '/page8',
    templateUrl: 'templates/sobreACibalHalal.html',
    controller: 'sobreACibalHalalCtrl'
  })

  .state('verificarCertificado', {
    url: '/page10',
    templateUrl: 'templates/verificarCertificado.html',
    controller: 'verificarCertificadoCtrl'
  })

  .state('verificarCertificadoFrigorFico', {
    url: '/page11',
    templateUrl: 'templates/verificarCertificadoFrigorFico.html',
    controller: 'verificarCertificadoFrigorFicoCtrl'
  })

  .state('governos', {
    url: '/page12',
    templateUrl: 'templates/governos.html',
    controller: 'governosCtrl'
  })

  .state('governosCertificado', {
    url: '/page14',
    templateUrl: 'templates/governosCertificado.html',
    controller: 'governosCertificadoCtrl'
  })

  .state('governosControleDeQualidade', {
    url: '/page15',
    templateUrl: 'templates/governosControleDeQualidade.html',
    controller: 'governosControleDeQualidadeCtrl'
  })

  .state('governosFrigorFico', {
    url: '/page16',
    templateUrl: 'templates/governosFrigorFico.html',
    controller: 'governosFrigorFicoCtrl'
  })

  .state('controleDeQualidade', {
    url: '/page17',
    templateUrl: 'templates/controleDeQualidade.html',
    controller: 'controleDeQualidadeCtrl'
  })

  .state('controleDeQualidadeInvoice', {
    url: '/page18',
    templateUrl: 'templates/controleDeQualidadeInvoice.html',
    controller: 'controleDeQualidadeInvoiceCtrl'
  })

  .state('entrarEmContato', {
    url: '/page20',
    templateUrl: 'templates/entrarEmContato.html',
    controller: 'entrarEmContatoCtrl'
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