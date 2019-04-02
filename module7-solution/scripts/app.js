
(function () {

	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	.filter('angularDollar', AngularDollarFilter);


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {

		var toBuyCtrl = this;
		
		toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

		toBuyCtrl.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}

	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		
		var boughtCtrl = this;

		boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();

	}
	

	function ShoppingListCheckOffService() {

		var service = this;

		var toBuyItems = [
			{
				name: "Cookies",
				quantity: 10,
				pricePerItem: 2
			},
			{
				name: "Chips",
				quantity: 5,
				pricePerItem: 5
			},
			{
				name: "Chocolates",
				quantity: 2,
				pricePerItem: 10.5
			},
			{
				name: "Fruits",
				quantity: 15,
				pricePerItem: 7.8
			
			},
			{
				name: "Vegetables",
				quantity: 20,
				pricePerItem: 6.4
			},
			{
				name: "Pizza",
				quantity: 1,
				pricePerItem: 9
			}
		];

		var boughtItems = [];

		service.buyItem = function (itemIndex) {
			boughtItems.push(toBuyItems[itemIndex]);
			toBuyItems.splice(itemIndex, 1);
		};

		service.getToBuyItems = function () {
    		return toBuyItems;
  		};

		service.getBoughtItems = function () {
			return boughtItems;
		};
	}


	function AngularDollarFilter() {
		return function (amount) {
			return "$$$" + amount.toFixed(2);
		};
	}
	

})();
