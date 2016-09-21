'use strict';

angular.module('aloeApp', [])
  .service('clinicsService', ['$http', function($http) {
    var clinicsService = {};

    clinicsService.getClinics = function () {
      return $http.get('http://localhost:8000/clinics');
    }

    clinicsService.addClinic = function (newClinic) {
      return $http.post('http://localhost:8000/clinics/', newClinic);
    };

    clinicsService.deleteClinic = function (clinicId) {
      return $http.delete('http://localhost:8000/clinics/' + clinicId);
    };

    return clinicsService;
  }]);
