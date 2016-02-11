

app.factory('serviceData', ['$http','$rootScope', function ($http, $rootScope) {
    
    var factory = {};
   
       factory.getInitData = function() {
          return $http.get("data/a.json").success(function (data, status) {
                     if (200 == status) {
                        console.log('data retrieved');
                      }
                  }).error(function (data, status) {
                      if (500 === status) {
                      }
                  }); 
       }

       factory.getJsonData = function(jsonToCall){
            return $http.get(jsonToCall).success(function (data, status) {
                     if (200 == status) {
                        console.log('data retrieved');
                      }
                  }).error(function (data, status) {
                      if (500 === status) {
                      }
                  });
       }
   
   return factory;

}]);


