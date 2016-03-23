'use strict';

/**
 * Module dependencies.
 */
var subscribePolicy = require('../policies/subscribe.server.policy'),
  subscribes = require('../controllers/subscribe.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/subscribes').all(subscribePolicy.isAllowed)
    .get(subscribes.list)
    .post(subscribes.create);

  // Single article routes
  app.route('/api/subscribes/:subscribeId').all(subscribePolicy.isAllowed)
    .get(subscribes.read)
    .put(subscribes.update)
    .delete(subscribes.delete);

  // Finish by binding the article middleware
  app.param('subscribeId', subscribes.subscribeByID);
};
