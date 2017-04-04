angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrv){
$scope.locations = mainSrv.travelInfo;
  console.log($scope.locations);
})
