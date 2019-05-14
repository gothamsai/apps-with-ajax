(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService'];
function SignUpController(UserInfoService) {

	var signUpCtrl = this;

	signUpCtrl.firstName = "";
	signUpCtrl.lastName = "";
	signUpCtrl.emailAddress = "";
	signUpCtrl.phoneNumber = "";
	signUpCtrl.menuItemShortName = "";
	signUpCtrl.menuItemValid = false;
	signUpCtrl.infoSaved = false;

	signUpCtrl.validateMenuItem = function() {
		UserInfoService.getChosenMenuItem(signUpCtrl.menuItemShortName).then(function(response){
			console.log("signUpController gotChosenMenuItem!", response);

			signUpCtrl.menuItemValid = true;
			UserInfoService.setMenuItemValid(true);
			UserInfoService.setMenuItem(response);

			
		}).catch(function (error) {

			signUpCtrl.menuItemValid = false;
			UserInfoService.setMenuItemValid(false);
			UserInfoService.setMenuItem(null);
			
		});
	};

	signUpCtrl.submit = function() {
		UserInfoService.setFirstName(signUpCtrl.firstName);
		UserInfoService.setLastName(signUpCtrl.lastName);
		UserInfoService.setEmailAddress(signUpCtrl.emailAddress);
		UserInfoService.setPhoneNumber(signUpCtrl.phoneNumber);
		UserInfoService.setInfoSaved(true);

		signUpCtrl.infoSaved = true;
	};

}


})();
