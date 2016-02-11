

app.controller('HomeCtrl', ['$scope','$http','serviceData','$modal', function ($scope, $http, serviceData, $modal) {  

	if (serviceData){
		    serviceData.getInitData().then(function(d){
	     	$scope.a_details = d.data.payload;
	     });
	}

    $scope.predicate = 'deliveryStartPointName';
    $scope.reverse = false;

   $scope.showSelectedValue = function(value){

        if(value === 'REMOTE COLLECTION'){
        	serviceData.getJsonData("data/c.json").then(function(d){
		     	$scope.new_details = d.data.payload;
		     });
        }
        else if (value === 'DELIVERY'){
        	serviceData.getJsonData("data/d.json").then(function(d){
		     	$scope.new_details = d.data.payload;
		     });
        } 
   }

   $scope.showAnotherSelectedValue = function(value){
        if (value){
            $http.get("data/e.json").success(function(data){
                 $scope.table_details = data.payload;
            });
        }
   }

   $scope.openDetailsModal = function(detail){
   		console.log(detail);
   		var modalInstance = $modal.open({
   			templateUrl:'templates/modalDetails.html',
   			controller: 'ModalDetailsCtrl',
   			resolve: {
   				recordDetail: function(){
   					return detail;
   				}
   			}
   		});
   }

   $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
   };
       
}]);