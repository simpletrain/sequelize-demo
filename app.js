'use strict';

var db = require('./models/app');

db.Class.create({name: 'classOne', grade: 1}).then(function (classOne) {
    db.Student.bulkCreate([{name: 'KimJongUn', sex: 'male'}, {name: 'Obama', sex: 'male'}, {name: 'WangLuoDan', sex: 'female'}])
        .then(function () {
            db.Student.findAll().then(function (students) {
                classOne.setStudent(students);
                db.Schedule.bulkCreate([{name: 'KimJongUn_schedule'}, {name: 'Obama_schedule'}, {name: 'WangLuoDan_schedule'}])
                    .then(function () {
                        db.Schedule.findAll().then(function (Schedules) {
                            students[0].setSchedule(Schedules[0]);
                            students[1].setSchedule(Schedules[1]);
                            students[2].setSchedule(Schedules[2]);
                            db.Subject.bulkCreate([{name: 'WebDev', credit: 3}, {
                                name: 'DB_advance',
                                credit: 5
                            }, {name: 'English', credit: 2.5}])
                                .then(function () {
                                    db.Subject.findAll().then(function (Subjects) {
                                        Schedules[0].setCourse(Subjects);
                                        Schedules[1].setCourse(Subjects);
                                        Schedules[2].setCourse(Subjects[1]);
                                    });
                                });
                        });
                    });
            });
        });
});