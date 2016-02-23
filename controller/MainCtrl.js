angular.module('starwars').controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService){

  $scope.getChars = function() {
      dataService.getCharData().then(function(response) {
          console.log('response: ',response);
          $scope.chars = response;
      });
  };

  $scope.getChars();

}]);
