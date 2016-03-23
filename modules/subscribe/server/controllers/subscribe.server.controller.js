'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Subscribe = mongoose.model('Subscribe'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a subscribe
 */
exports.create = function (req, res) {
  var subscribe = new Subscribe(req.body);
  Subscribe.user = req.user;

  Subscribe.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subscribe);
    }
  });
};

/**
 * Show the current subscribe
 */
exports.read = function (req, res) {
  res.json(req.subscribe);
};

/**
 * Update a subscribe
 */
exports.update = function (req, res) {
  var subscribe = req.subscribe;

  Subscribe.title = req.body.title;
  Subscribe.content = req.body.content;

  Subscribe.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subscribe);
    }
  });
};

/**
 * Delete an subscribe
 */
exports.delete = function (req, res) {
  var subscribe = req.subscribe;

  Subscribe.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subscribe);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Subscribe.find().sort('-created').populate('user', 'displayName').exec(function (err, subscribes) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subscribes);
    }
  });
};

/**
 * Subcribes middleware
 */
exports.subscribeByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Subcribes is invalid'
    });
  }

  Subscribe.findById(id).populate('user', 'displayName').exec(function (err, subscribe) {
    if (err) {
      return next(err);
    } else if (!subscribe) {
      return res.status(404).send({
        message: 'No subscribe with that identifier has been found'
      });
    }
    req.subscribe = subscribe;
    next();
  });
};
