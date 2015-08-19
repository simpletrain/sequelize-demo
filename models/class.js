'use strict';
module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define('Class', {
        name: DataTypes.STRING,
        Grade: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Class.hasMany(models.Student,{as: 'Student'});
            }
        }
    });
    return Class;
};