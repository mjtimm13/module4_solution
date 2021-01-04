(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menusrvc/templates/categorylist.template.html',
  bindings: {
      categories: '<',
      onAction: '&'
  }
});

})();
