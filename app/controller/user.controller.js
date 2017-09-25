'use strict';

var User = require('../model/user.model').User;

/** create function to create User. */
exports.create = function (req, res) { console.log(2222);
    User.create(req.body, function(err, result) { console.log(result);
        if (!err) {
            return res.returnSuccess(result);
        } else { console.log(err)
            return res.returnFail(err); // 500 error
        }
    });
};

/** import function to add json list of Users. */
exports.importMany = function (req, res) {
    User.importMany(req.body, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** getUser function to get User by id. */
exports.get = function (req, res) {
    User.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** getUsers function to get all Users. */
exports.getAll = function (req, res) {
    User.find({},function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
            // return res.returnSuccess({
            //     data: result
            // });
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** updateUser function to get User by id. */
exports.update = function (req, res) {
    User.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}

/** removeUser function to get User by id. */
exports.delete = function (req, res) {
    User.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}

/** removeUsers function to delete all Users. */
exports.deleteAll = function (req, res) {
    User.removeAll(function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}