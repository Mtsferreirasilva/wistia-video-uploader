var wVideoUploader = angular.module("wVideoUploader", ['ui.router', 'ngMaterial', 'blueimp.fileupload']);

wVideoUploader.config(function($stateProvider, $urlRouterProvider) {
	//Redirect
	$urlRouterProvider.otherwise("/uploader");
	
	//States
	$stateProvider
		.state('uploader', {
			url: "/uploader",
			templateUrl: "/wistia-video-uploader/views/uploader.html",
			controller: "wUploadController"
		});
});

