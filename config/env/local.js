/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

// Rename this file to local.js for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

// For example:

module.exports = {
  db: {
    uri: 'mongodb://127.0.0.1:27017/local-dev',
    options: {
      user: '',
      pass: ''
    }
  },
  sessionSecret: process.env.SESSION_SECRET || 'DTCMakassar2016',
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  }
};
