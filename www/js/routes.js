app
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.contenus', {
    url: '/contenus',
    views: {
      'menuContent': {
        templateUrl: 'comp/contenus/contenus-tpl.html'
      }
    }
  })
  .state('app.contenusAjouter', {
    url: '/contenus/ajouter',
    views: {
      'menuContent': {
        templateUrl: 'comp/contenus-ajouter/contenus-ajouter-tpl.html',
        controller: 'contenusAjouterCtrl'
      }
    }
  })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/contenus');
});
