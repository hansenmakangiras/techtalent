'use strict';

// Articles controller
angular.module('subscribe').controller('DashboardController', ['$scope', '$stateParams', '$location', 'Authentication',
  function ($scope, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;
  }
]);
