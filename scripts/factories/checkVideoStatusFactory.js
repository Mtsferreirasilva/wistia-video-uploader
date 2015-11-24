processStreetVideoUploader.factory('checkVideoStatusFactory', function($http, $rootScope){
	return {
		getData: function(){
			$http.get('https://api.wistia.com/v1/medias.json', {
				params: {
					hashed_id: $rootScope.whash,
					api_password: '22f6ad10fc25d7415684386b902ee8ea480370f7962ee3f140bc631c3fdba04c'
				}
			}).success(function(data) {
				$rootScope.videoStatus = data[0].status;
			}).error(function(){
				console.log('Error');
			});
		}
	}
});