
const createConnection = require('mysql2');
const mysql  = require('mysql2')

// const con = mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Shivam@0822",
//     database:"college",
//     port:3306
// });

const con =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Shivam@0822",
    database:"college",
    port:3306
});
   con.connect(function(err){
    if(err) throw err;
    con.query("select * from student", (error,result)=>{
        if(error) throw error;
        console.log(result);
    })
}) ;

module.exports =  con;

