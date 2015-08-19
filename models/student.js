'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        name: DataTypes.STRING,
        sex: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Student.hasOne(models.Schedule,{as: 'Schedule'});
                Student.belongsTo(models.Class,{as: 'Class'});
            }
        }
    });
    return Student;
};