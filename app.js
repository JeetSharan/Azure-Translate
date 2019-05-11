const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/EmployeeData');
const employeedatarouter = express.Router();
const port = process.env.port || 3000;
const EmpData = require('./models/EmployeeDataModel');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

employeedatarouter.route('/employeeData')
.post((req,res) => {
    const emp = new EmpData(req.body);
    emp.save();

    return res.status(201).json(emp);
})
.put((req,res) => {
    EmpData.findById(req.body._id,(err, emp) => {
        if(err)
        {
            return res.send(err);
        }
        emp.ein = req.body.ein;
        emp.employerName = req.body.employerName;
        emp.empID = req.body.empID;
        emp.empName = req.body.empName;
        emp.date = req.body.date;
        emp.save();
        return res.json(emp);
    })
})
.get((req,res) => {
    var query = {};
    if(req.query.empID)
    {
        query.empID = req.query.empID;
    }
    if(req.query.ein)
    {
        query.ein = req.query.ein;
    }
    console.log('get request');
    EmpData.find(query, (err, emp) => {
        if(err)
        {
            console.log('failed');
            return res.send(err);
        }
        console.log('success');
        var e = new EmpData;
        e.empName = emp.empName;
        e.date = emp.date;
        return res.json(emp);
    })
});


employeedatarouter.route('/employeeData/:eid')
.get((req,res) => {
    EmpData.findById(req.params.eid,(err, emp) => {
        if(err)
        {
            return res.send(err);
        }
        return res.json(emp);
    })
});

app.use('/api', employeedatarouter);

app.get('/', (req, res)=>{
    res.sendFile('EmployeeSideClient.htm', {root: '/Users/jbansal/'});
});

app.listen(port, ()=>{
    console.log('Running on Port '+port);
});
