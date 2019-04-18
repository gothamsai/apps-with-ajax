(function () {

	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItemsDirective);


	
	function FoundItemsDirective() {

		var ddo = {
			templateUrl: '/apps-with-ajax/itemsThatWereFound.html',
			scope: {
				found: '<',
				onRemove: '&'
			},
			controller: NarrowItDownController,
    		controllerAs: 'narrowItDownCtrl',
    		bindToController: true
		};

		return ddo;
	}


	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		
		var narrowItDownCtrl = this;
		
		narrowItDownCtrl.narrowItDown = function () {
			
			var promise = MenuSearchService.getMatchedMenuItems(narrowItDownCtrl.searchTerm);

			promise.then(function (response) {
				narrowItDownCtrl.found = response;
    		})
    		.catch(function (error) {
      			console.log(error);
    		})

		};

		narrowItDownCtrl.onRemove = function (index) {
			narrowItDownCtrl.found.splice(index, 1);
		};

		narrowItDownCtrl.nothingFound = function () {
			if(narrowItDownCtrl.found && narrowItDownCtrl.found.length <= 0){
				return true;
			} else {
				return false;
			}
		};

	}


	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {

		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {

			return $http({
				method: "GET",
      			url: (ApiBasePath + "/menu_items.json")
			}).then(function (response) {
				var menuItems = response.data.menu_items;
				var foundItems = [];

				if(searchTerm){
			 		menuItems.map(function(menuItem) {
						if(menuItem.description.indexOf(searchTerm) >= 0){
							foundItems.push(menuItem);
						}
					});
				}

				return foundItems;
			});
		};

	}

})();
