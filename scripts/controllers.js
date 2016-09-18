'use strict';

angular.module('aloeApp', [])
  .controller('ClinicsController', ['$scope', '$http', function($scope, $http) {
    $scope.fetchClinics = function () {
      var clinicsResponse = $http.get('http://localhost:8000/clinics');
      clinicsResponse.success(function (data, status, headers, config) {
        $scope.clinics = data;
        $('#clinics').fadeTo('fast', 1);
      });
      clinicsResponse.error(function (data, status, headers, config) {
        console.log("Fetch request for clinics failed!");
      });
    }

    $scope.deleteClinic = function ($index, clinic) {
      var clinicsResponse = $http.delete('http://localhost:8000/clinics/' + clinic.id);
      clinicsResponse.success(function (data, status, headers, config) {
        console.log('Clinic successfully deleted!');
        $scope.clinics.splice($index, 1);
      });
      clinicsResponse.error(function (data, status, headers, config) {
        console.log('Error deleting clinic!');
      });
    };

    $scope.fetchClinics();
  }]);
