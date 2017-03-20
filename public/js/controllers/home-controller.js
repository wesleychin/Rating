(function(app) {
	app.controller('HomeController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		$scope.showRatingDialog = function(ev) {
    $mdDialog.show({
      controller: 'RatingDialogController',
      templateUrl: '../partials/rating-dialog-partial.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    });
  };
	}]);
})(Rating);
