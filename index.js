const express  = require('express');
const studentRoute = require('./routes/student');

const PORT = 5000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/student',studentRoute);

app.post("/",(req,res)=>{
    console.log(req.body);
});

app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`);
});