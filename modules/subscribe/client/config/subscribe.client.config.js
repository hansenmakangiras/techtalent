'use strict';

// Configuring the Articles module
angular.module('subscribe').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Subscribes',
      state: 'subscribe',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'subscribes', {
      title: 'List Subscribe',
      state: 'subscribes.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'subscribes', {
      title: 'Create Subcribes',
      state: 'subcribe.create',
      roles: ['user']
    });
  }
]);
