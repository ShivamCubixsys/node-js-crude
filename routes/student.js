const express  = require('express');
const con  = require('../database');
const router = express.Router();


/// create
router.post('/create',(req,res)=>{
    let student = req.body;
    query = "insert into student (name,city, phoneNo) values(?,?,?)";
    con.query(query,[student.name,student.city,student.phoneNo],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Student added successfully"});
        }
        else 
        return res.status(500).json(err);
    });
});

/// get
router.get('/getStudent',(req,res)=>{
   var query = "select * from student";
    con.query(query,(err,result)=>{
        if(!err){
            return res.status(200).json(result);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

/// patch

router.patch('/update/:id',(req,res)=>{
    const id = req.params.id;
    let student = req.body;
   var query = "update student set name=?,city=?,phoneNo=? where id=?";
   con.query(query,[student.name,student.city,student.phoneNo,id],(err,result)=>{
    if(!err){
        if(result.affectedRows == 0){
            return res.status(400).json({message:"Student id does not found"});
        }
        return res.status(200).json({message:"Student updated successfully"});
    }
    else{
        return res.status(500).json(err);
    }
   });
});

/// delete


router.delete('/delete/:id',(req,res)=>{

const id = req.params.id;
var query = "delete * from student where id=?";
con.query(query,[id],(err,result)=>{
    if(!err){

        if(result.affectedRows == 0){
            return res.status(500).json({message:"Student id does not exists"});
        }
        return res.status(200).json({message:"Student deleted successfully"});
    }
    else{
        return res.status(500).json(err);
    }
});
});

module.exports = router;