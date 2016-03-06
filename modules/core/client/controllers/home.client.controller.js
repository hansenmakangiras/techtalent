/**
 * Created by hanse on 1/24/2016.
 */
'use strict';

angular.module('core').controller('HomeController', ['$','$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    bgHome('home');

    function bgHome(status) {
      var el = $('body');

      if (status === 'home') {
        el.removeClass('bg');
        el.addClass('bg-home');
      } else {
        el.removeClass('bg-home');
        el.addClass('bg');
      }
    }
  }
]);
