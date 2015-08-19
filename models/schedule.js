'use strict';
module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define('Schedule', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Schedule.belongsTo(models.Student,{as: 'Student'});
                Schedule.belongsToMany(models.Subject,{as: 'Subject',through:'ScheduleSubject'});
            }
        }
    });
    return Schedule;
};