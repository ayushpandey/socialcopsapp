var app = angular.module('socialCops', []);

app.controller('MainCtrl', function($scope,$http) {
  $scope.name = 'World';
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "./sachin.csv", true);
  txtFile.onreadystatechange = function()
    {
        allText = txtFile.responseText;
        console.log(alltext);
        console.log("Hello");
    };
});
