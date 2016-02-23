/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    db: {
        //uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://ds047305.mongolab.com:47305/tech_talent',
        uri: process.env.MONGOHQ_URL || 'mongodb://devtech:devtech2016@ds047305.mongolab.com:47305/tech_talent' || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || '127.0.0.1') + '/mean-dev',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    log: {
        // logging with Morgan - https://github.com/expressjs/morgan
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'dev',
        options: {
            // Stream defaults to process.stdout
            // Uncomment/comment to toggle the logging to a log on the file system
            //stream: {
            //  directoryPath: process.cwd(),
            //  fileName: 'access.log',
            //  rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
            //    active: false, // activate to use rotating logs
            //    fileName: 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
            //    frequency: 'daily',
            //    verbose: false
            //  }
            //}
        }
    },
    app: {
        title: defaultEnvConfig.app.title + ' - Development Environment'
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID || '1690330761186585',
        clientSecret: process.env.FACEBOOK_SECRET || '8c276916b67298e83eec9c66d2fe994e',
        callbackURL: '/api/auth/facebook/callback'
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
        clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
        callbackURL: '/api/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || '573705101198-n8c90t5cueecj4pc5d893gbatqbcl5al.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'jwpPSyC-r3T-OtV7ohpDfUPY',
        callbackURL: '/api/auth/google/callback'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || '75ryg9srtbrqr1',
        clientSecret: process.env.LINKEDIN_SECRET || 'Kd61E49RuRr05bTL',
        callbackURL: '/api/auth/linkedin/callback'
    },
    github: {
        clientID: process.env.GITHUB_ID || 'APP_ID',
        clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/github/callback'
    },
    paypal: {
        clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
        clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
        callbackURL: '/api/auth/paypal/callback',
        sandbox: true
    },
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    },
    livereload: true,
    seedDB: {
        seed: process.env.MONGO_SEED === 'true' ? true : false,
        options: {
            logResults: process.env.MONGO_SEED_LOG_RESULTS === 'false' ? false : true,
            seedUser: {
                username: process.env.MONGO_SEED_USER_USERNAME || 'user',
                provider: 'local',
                email: process.env.MONGO_SEED_USER_EMAIL || 'user@localhost.com',
                firstName: 'User',
                lastName: 'Local',
                displayName: 'User Local',
                roles: ['user']
            },
            seedAdmin: {
                username: process.env.MONGO_SEED_ADMIN_USERNAME || 'admin',
                provider: 'local',
                email: process.env.MONGO_SEED_ADMIN_EMAIL || 'admin@localhost.com',
                firstName: 'Admin',
                lastName: 'Local',
                displayName: 'Admin Local',
                roles: ['user', 'admin']
            }
        }
    }
};
