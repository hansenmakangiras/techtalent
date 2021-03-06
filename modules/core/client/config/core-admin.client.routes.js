/**
 * Created by hanse on 1/24/2016.
 */
'use strict';

// Setting up route
angular.module('core.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>',
        data: {
          roles: ['admin'],
          pageTransition: 'wow fadein'
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        controller: 'HomeController',
        template: '<ui-view/>',
        data: {
          roles: ['admin'],
          pageTransition: 'wow fadein'
        }
      });
  }
]);
