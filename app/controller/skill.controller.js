'use strict';

var Skill = require('../model/skill.model').Skill;

/** create function to create Skill. */
exports.create = function (req, res) {
    Skill.create(req.body, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** import function to add json list of Skills. */
exports.importMany = function (req, res) {
    Skill.importMany(req.body, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** getSkill function to get Skill by id. */
exports.get = function (req, res) {
    Skill.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
};

/** getSkills function to get all Skills. */
exports.getAll = function (req, res) {
    Skill.find({},function(err, result) {
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

/** updateSkill function to get Skill by id. */
exports.update = function (req, res) {
    Skill.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}

/** removeSkill function to get Skill by id. */
exports.delete = function (req, res) {
    Skill.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}

/** removeSkills function to delete all Skills. */
exports.deleteAll = function (req, res) {
    Skill.removeAll(function(err, result) {
        if (!err) {
            return res.returnSuccess(result);
        } else {
            return res.returnFail(err); // 500 error
        }
    });
}