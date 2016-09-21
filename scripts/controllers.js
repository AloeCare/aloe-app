'use strict';

angular.module('aloeApp')
  .controller('ClinicsController', ['$scope', 'clinicsService', function($scope, clinicsService) {
    $scope.newClinic = {
      name: '',
      description: ''
    };

    $scope.fetchClinics = function () {
      var clinicsResponse = clinicsService.getClinics();
      clinicsResponse.success(function (data, status, headers, config) {
        console.log('Clinics successfully fetched!');
        $scope.clinics = data;
        $('#clinics').fadeTo('fast', 1);
      });
      clinicsResponse.error(function (data, status, headers, config) {
        console.log("Fetch request for clinics failed!");
      });
    }

    $scope.addClinic = function () {
      var clinicsResponse = clinicsService.addClinic($scope.newClinic);
      clinicsResponse.success(function (data, status, headers, config) {
        console.log('Clinic successfully created!');
        $scope.clinics.push(data.clinic);
        $scope.newClinic = {
          name: '',
          description: ''
        };
      });
      clinicsResponse.error(function (data, status, headers, config) {
        console.log('Error creating clinic!');
      });
    };

    $scope.deleteClinic = function ($index, clinic) {
      var clinicsResponse = clinicsService.deleteClinic(clinic.id);
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
