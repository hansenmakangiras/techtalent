'use strict';

// Setting up route
angular.module('subscribe').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('subscribe', {
        abstract: true,
        url: '/subscribe',
        template: '<ui-view/>'
      })
      .state('subscribe.list', {
        url: '',
        templateUrl: 'modules/dashboard/client/views/list-subscribe.client.view.html'
      })
      .state('subscribe.create', {
        url: '/create',
        templateUrl: 'modules/dashboard/client/views/create-subscribe.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('subscribe.view', {
        url: '/:subscribeId',
        templateUrl: 'modules/dashboard/client/views/view-subscribe.client.view.html'
      })
      .state('subscribe.edit', {
        url: '/:subscribeId/edit',
        templateUrl: 'modules/dashboard/client/views/edit-subscribe.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
