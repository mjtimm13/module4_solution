(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menusrvc/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});

})();
