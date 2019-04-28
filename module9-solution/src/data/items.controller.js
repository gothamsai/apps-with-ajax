(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

// 'items' is injected through state's resolve
ItemsController.$inject = ['items']
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.category = items.data.category;
  itemsCtrl.items = items.data.menu_items;
}

})();
