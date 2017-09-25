'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// TODO : use shared SkillSchema, move to file
var SkillSchema = new Schema({
  name: { type: String, required: true, unique: true },
  expertiseLevel: { type: Number, min: 0, max: 100, required: true },
  priority: { type: Number, default : 5, min: 1, max: 5, required: true }
});

var UserSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  name: {
      first: { type: String, required: true, trim: true},
      last: { type: String, required: true, trim: true}
  },
  phone: Number,
  accessToken: { type: String }, // Used for Remember Me
  // education: [EducationSchema],
  skills: [SkillSchema],
});


UserSchema.statics = {

    /**
      findOneuser. return the one user object.
      @param id: get id to find one user by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      finduser. return the user objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },

    /**
      updateuser. return the create user object result.
      @param updateData: updateData is use to update user w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(id, callback) {
        this.remove(id, callback);
    },
    removeAll: function(callback) {
        this.remove(callback);
    },
    create: function(data, callback) {
        var user = new this(data);
        user.save(callback);
    },
    importMany: function(data, callback) {
        this.insertMany(data, callback);
    }
}

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User: user
};


/*

  [{
      "email": "payalcsureja@gmail.com",
      "password": "1234567890",
      "name": {
          "first": "Payal",
          "last": "Sureja"
      },
      "phone": 1234567890,
      "accessToken": "1234567890",
      "skills": [
        {
          "name": "LAMP",
          "expertiseLevel": 90,
          "priority": 1
        },
        {
          "name": "PHP",
          "expertiseLevel": 90,
          "priority": 1
        },
        {
          "name": "mySql",
          "expertiseLevel": 90,
          "priority": 1
        },
        {
          "name": "AngularJs",
          "expertiseLevel": 70,
          "priority": 2
        },
        {
          "name": "Javascript",
          "expertiseLevel": 90,
          "priority": 2
        },
        {
          "name": "REST",
          "expertiseLevel": 90,
          "priority": 2
        },
        {
          "name": "Bootstrap",
          "expertiseLevel": 90,
          "priority": 3
        },
        {
          "name": "jQuery",
          "expertiseLevel": 90,
          "priority": 3
        },
        {
          "name": "LESS",
          "expertiseLevel": 80,
          "priority": 3
        },
        {
          "name": "Ionic",
          "expertiseLevel": 60,
          "priority": 4
        },
        {
          "name": "Solr",
          "expertiseLevel": 60,
          "priority": 4
        },
        {
          "name": "MVC",
          "expertiseLevel": 70,
          "priority": 4
        },
        {
          "name": "Drupal",
          "expertiseLevel": 70,
          "priority": 4
        },
        {
          "name": "Joomla",
          "expertiseLevel": 90,
          "priority": 4
        },
        {
          "name": "Zend/Slim Framework",
          "expertiseLevel": 90,
          "priority": 4
        },
        {
          "name": "Git/SVN",
          "expertiseLevel": 70,
          "priority": 5
        },
        {
          "name": "Agile",
          "expertiseLevel": 70,
          "priority": 5
        },
        {
          "name": "SSO (Auth0)",
          "expertiseLevel": 70,
          "priority": 5
        },
        {
          "name": "NPM",
          "expertiseLevel": 70,
          "priority": 5
        },
        {
          "name": "Grunt/gulp",
          "expertiseLevel": 70,
          "priority": 5
        },
        {
          "name": "Bower",
          "expertiseLevel": 70,
          "priority": 5
        }
      ]
    }]

*/