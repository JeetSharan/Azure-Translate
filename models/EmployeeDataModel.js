const mongoose = require('mongoose');

const {Schema} = mongoose;

const employeeDataModel = new Schema(
    {
        ein: {type: Number},
        employerName: {type: String},
        empID: {type: String},
        empName: {type: String}, 
        date: {type: Number},
    },
    {collection: 'EmployeeData'},
);

module.exports = mongoose.model('EmpData', employeeDataModel);