(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
function MyInfoController(UserInfoService, ApiPath) {

	var myInfoCtrl = this;

	myInfoCtrl.infoSaved = UserInfoService.getInfoSaved();
	myInfoCtrl.menuItem = UserInfoService.getMenuItem();
	myInfoCtrl.firstName = UserInfoService.getFirstName();
	myInfoCtrl.lastName = UserInfoService.getLastName();
	myInfoCtrl.emailAddress = UserInfoService.getEmailAddress();
	myInfoCtrl.phoneNumber = UserInfoService.getPhoneNumber();

	myInfoCtrl.basePath = ApiPath;

}


})();
