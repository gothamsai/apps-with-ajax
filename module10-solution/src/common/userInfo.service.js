(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


UserInfoService.$inject = ['$http', 'ApiPath'];
function UserInfoService($http, ApiPath) {
	var service = this;
	
	var firstName = "";
	var lastName = "";
	var emailAddress = "";
	var phoneNumber = "";
	var menuItem = null;
	var menuItemValid = false;
	var infoSaved = false;

	service.getChosenMenuItem = function (shortName) {
		return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
			return response.data;
		});
	};

	service.getMenuItemValid = function () {
		return service.menuItemValid;
	};

	service.setMenuItemValid = function(isMenuItemValid) {
		service.menuItemValid = isMenuItemValid;
	};

	service.getInfoSaved = function() {
		return service.infoSaved;
	};

	service.setInfoSaved = function(isInfoSaved) {
		service.infoSaved = isInfoSaved;
	};

	service.getFirstName = function() {
		return service.firstName;
	};

	service.setFirstName = function(firstNameToSet) {
		service.firstName = firstNameToSet;
	};

	service.getLastName = function () {
		return service.lastName;
	};

	service.setLastName = function (lastNameToSet) {
		service.lastName = lastNameToSet;
	};

	service.getEmailAddress = function () {
		return service.emailAddress;
	};

	service.setEmailAddress = function(emailAddressToSet) {
		service.emailAddress = emailAddressToSet;
	};

	service.getPhoneNumber = function () {
		return service.phoneNumber;
	};

	service.setPhoneNumber = function (phoneNumberToSet) {
		service.phoneNumber = phoneNumberToSet;
	};

	service.getMenuItem = function () {
		return service.menuItem;
	};

	service.setMenuItem = function (menuItemToSet) {
		service.menuItem = menuItemToSet;
	};
	

}



})();
