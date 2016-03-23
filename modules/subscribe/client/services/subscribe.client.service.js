'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('subscribe').factory('Subscribe', ['$resource',
  function ($resource) {
    return $resource('api/subscribe/:subscribeId', {
      messageId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
