
const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require ("mysql2");
const cors = require ("cors");


//database

const db = mysql.createPool({

host : "localhost",
user : "root",
password : "biswash",
database : "room"

});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded( {extended: true}));

app.get("/api/get", (req,res) => {
const sqlget ="select * from hotel_registration";
db.query(sqlget, (error,result) => {
    res.send(result);
})

})

app.get('/', (req,res) => {
     const sqlinsert ="insert into hello (FullName,email,contact) values ('biswashlimbu','biswas@gmail.com',548545)";
     db.query(sqlinsert, (error,result) => {
         console.log("error",error);
         console.log("result",result);
         res.send("hello guys");
     });
    
});


app.listen(4000,() => {

console.log('running ');
});