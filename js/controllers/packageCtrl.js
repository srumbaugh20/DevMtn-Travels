angular.module('devmtnTravel').controller('packageCtrl', function($scope, mainSrv){

$scope.packages = mainSrv.packageInfo;
  

})
