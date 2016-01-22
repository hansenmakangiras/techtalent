/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

module.exports.profileUploadFileFilter = function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif') {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
