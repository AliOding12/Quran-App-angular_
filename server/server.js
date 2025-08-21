const express = require('express');
const mysqlpool = require('./config/db');
const { error } = require('console');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
//const {middleware} = require(bodyParser.json(),'./Routes/registerroute');
app.use(bodyParser.json());
app.use(cors());
app.use('/api',require('./Routes/registerroute'));
app.use(express.urlencoded({ extended: true }));
//app.use('/api',middleware);
//app.use('/api/createUser',require('./Routes/registerroute'));
//app.use('/api/checkUser',require('./Routes/registerroute'));
app.get('/',(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>");
})

const PORT = 3000;
mysqlpool.query('SELECT 1').then(()=>{
    console.log('Database Connected Successfully');
    app.listen(PORT,(req,res)=>{
    console.log(`the server is running at ${PORT}`);
})
}
).catch((error)=>{
    console.log(error);
})