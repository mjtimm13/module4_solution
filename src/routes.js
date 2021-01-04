(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menusrvc/templates/home.template.html'
  })

  // Menu Category List
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menusrvc/templates/categories.template.html',
      controller: 'MainShoppingListController as mainList',
      resolve: {
          categories: ['MenuDataService',
              function (MenuDataService) {
                  return MenuDataService.getAllCategories();
              }]
      }
  })

  // Menu Items List
  .state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/menusrvc/templates/items.template.html',
      controller: 'ItemsDetailController as itemsDetail',
      resolve: {
          items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryId);
              }]
      }
  });
}

})();
