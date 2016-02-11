app.controller('ModalDetailsCtrl', ['$scope','$modalInstance','recordDetail', function ($scope, $modalInstance, recordDetail) {
	console.log("Recieved ModalDetailsCtrl");

	$scope.record = recordDetail;
	$scope.ok = function () {
		$modalInstance.close();
    }
	
}])