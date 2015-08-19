'use strict';
module.exports = function(sequelize, DataTypes) {
    var Subject = sequelize.define('Subject', {
        name: DataTypes.STRING,
        credit: DataTypes.DOUBLE
    }, {
        classMethods: {
            associate: function(models) {
                Subject.belongsToMany(models.Schedule,{as:'Schedule',through:'ScheduleSubject'});
            }
        }
    });
    return Subject;
};