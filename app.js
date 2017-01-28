var app = angular.module('socialCops', []);

app.controller('MainCtrl', function($scope,$http) {
  $scope.name = 'World';
  $http({
    method: 'GET',
    url: 'http://localhost:3000'
  }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});
