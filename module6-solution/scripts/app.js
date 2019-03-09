
(function () {

	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheck); 

	LunchCheck.$inject = ['$scope', '$filter'];

	function LunchCheck($scope, $filter) {
		$scope.items = "";
		$scope.message = "";
		$scope.fontStyle = "";
		$scope.borderStyle = "";

		$scope.displayMessage = function () {
			var messageAndStyles = getMessageAndStyles($scope.items);
			$scope.message = messageAndStyles[0];
			$scope.fontStyle = messageAndStyles[1]; 
			$scope.borderStyle = messageAndStyles[2];
		};

		function getMessageAndStyles(items) {
			var itemsList = getItemsList(items);

			var messageToRet = "";
			var fontStyleToRet = "";
			var borderStyleToRet = "";
			
			if(itemsList.length > 0 && itemsList.length <= 3){
				messageToRet = "Enjoy!";
				fontStyleToRet = "green-font";
				borderStyleToRet = "green-border";
			} else if(itemsList.length > 3){
				messageToRet = "Too much!";
				fontStyleToRet = "green-font";
				borderStyleToRet = "green-border";
			} else {
				messageToRet = "Please enter data first";
				fontStyleToRet = "red-font";
				borderStyleToRet = "red-border";
			}

			return [messageToRet, fontStyleToRet, borderStyleToRet];

		}

		function getItemsList(itemsToCheck) {
			var itemsList = itemsToCheck.split(",");
			itemsList = itemsList.filter(function (item){
				if(item.trim() != ""){
					return true;
				} else {
					return false;
				}
			});
			return itemsList;
		}
	}

})();
