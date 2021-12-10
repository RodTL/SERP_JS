const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

//connect to DB
mongoose.connect('mongodb+srv://admin:admin23@serp.lbjmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () =>
console.log('connected to DB')
);

//create data schema
const studentSchema = mongoose.Schema({
    id:  { type:String},
    lastName:  { type:String, required: true},
    name:  { type:String, required: true},
    grade:  { type:Number, required: true, min:1, max:6},
    group:  { type:String, required: true},
    birthDay:  { type:Date},
    ppURL: { type:String}
})

const Student = mongoose.model("Student", studentSchema);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/students.html');
});

app.post('/', function(req,res){
    let newStudent = new Student({
        id: req.body.id_input,
        lastName: req.body.lastName_input,
        name: req.body.name_input,
        grade: req.body.grade_input,
        group: req.body.group_input,
        birthDay: req.body.birthDay_input,
        ppURL: ""
    })
    newStudent.save();
    res.redirect('/');
    console.log("New student posted to DB");
});


app.listen(3000, function(){
    console.log("server is running on 3000");
});



