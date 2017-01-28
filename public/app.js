var app = angular.module('socialCops', []);

app.controller('MainCtrl', function($scope,$http) {
  $scope.name = 'World';
  $http({
  method: 'GET',
  url: './sachin.csv'
  }).then(function successCallback(response) {
    console.log(response);
  }, function errorCallback(error) {
    console.log(error);
  });
});
