'use strict';

angular.module('aloeApp', [])
  .controller('ClinicsController', ['$scope', '$http', function($scope, $http) {
    var clinicsResponse = $http.get('http://localhost:8000/clinics');

    clinicsResponse.success(function (data, status, headers, config) {
      $scope.clinics = data;
    });

    clinicsResponse.error(function (data, status, headers, config) {
      console.log("Fetch request for clinics failed!");
    });
  }]);
