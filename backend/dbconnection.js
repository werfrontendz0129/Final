const mysql = require('mysql')
const db2 = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"final_project",
    port:4000,
    multipleStatements:true
})
db2.connect((err)=>{
   if(!err)
   {
       console.log("Connected with database2")
   }
   else
   {
       console.log("connection failed \n Error:" + JSON.stringify(err, undefined,2))
   }
})

module.exports = db2