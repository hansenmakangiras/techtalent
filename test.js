/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

/**
 * Module dependencies.
 */
var app;

var path = require('path');
var app = require(path.resolve('./config/lib/app'));

app.init(function () {
    console.log('Initialized test automation');
});
