/**
 * Created by hanse on 1/24/2016.
 */
'use strict';

angular.module('core.admin').run(['Menus',
    function (Menus) {
        Menus.addMenuItem('topbar', {
            title: 'Admin',
            state: 'admin',
            type: 'dropdown',
            roles: ['admin']
        });
    }
]);
