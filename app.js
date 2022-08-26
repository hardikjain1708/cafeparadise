var app = angular.module('myApp', ['ngAnimate']);

app.controller('validateCtrl', function ($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.nums = [1,2,3,4,5,6,7,8,9,'10 Or More'];
    $scope.reject = !$scope.accept;
});