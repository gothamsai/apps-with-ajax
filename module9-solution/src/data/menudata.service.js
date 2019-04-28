(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$http']
function MenuDataService($q, $http) {
	var service = this;

	service.getAllCategories = function () {
		return $http({
  			method: 'GET',
  			url: 'https://davids-restaurant.herokuapp.com/categories.json'
		});
	};

	service.getItemsForCategory = function (categoryShortName) {
		var menuItemsUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' 
						+ categoryShortName;

		return $http({
  			method: 'GET',
  			url: menuItemsUrl
		});	
	};	
}

})();


