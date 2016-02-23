/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/wow/css/animate.css',
                'public/lib/tag-it/css/tagit.ui-zendesk.css',
                'public/lib/angular-toastr/dist/angular-toastr.css',
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-messages/angular-messages.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angular-file-upload/angular-file-upload.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-toastr/dist/angular-toastr.tpls.js',
                'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
                'public/lib/wow/wow.js',
                'public/lib/tag-it/js/tagit.js',
            ]
        },
        css: 'public/dist/application.min.css',
        js: 'public/dist/application.min.js'
    }
};
