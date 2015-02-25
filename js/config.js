/**
 * Created by Han Chen on 24/02/2015.
 */
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: "IntroCtrl",
      templateUrl: 'template/intro.html'
    })
    .state('ranking-input', {
      url: '/ranking-input',
      controller:"InputCtrl",
      templateUrl:'template/ranking-input.html'
    })
    .state('ranking-display', {
      url: '/ranking-display',
      controller:"DisplayCtrl",
      templateUrl:'template/ranking-table.html'
    });
});