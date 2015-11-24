var processStreetVideoUploader = angular.module("processStreetVideoUploader", ['ui.router', 'ngMaterial', 'blueimp.fileupload']);

processStreetVideoUploader.config(function($stateProvider, $urlRouterProvider) {
	//Redirect
	$urlRouterProvider.otherwise("/uploader");
	
	//States
	$stateProvider
		.state('uploader', {
			url: "/uploader",
			templateUrl: "views/uploader.html",
			controller: "wUploadController"
		});
});

