//Mysql
// app.use('/api/register' ,registerRoute)
// app.post('/addUser', (req,res)=>{
//     const userObj = {
//         "_id":new mongoose.Types.ObjectId(),
//         "name":req.body.name
//     }
//     const newUser = new User(userObj)
//     newUser.save((err,user) =>{
//         if(err)
//         res.status(400).send("There is an error while adding new user");
//         else
//         res.status(200).json(user);
//     })
// })

// app.post('/addDoc', (req,res)=>{
//     const docObj = {
//         "_id":new mongoose.Types.ObjectId(),
//         "title":req.body.title,
//         "description":req.body.description,
//         "user":"60054fdb5f78974ebcf38f26" 
//     }
//     const newDoc = new Doc(docObj)
//     newDoc.save((err,doc)=>{
//         if(err)
//             res.status(400).send(err);
//         else
//             res.status(200).send(doc)
//     })
// })
// app.put('/docs/:id',(req,res)=>{
    
//     const docObj= {
//         "title":req.body.title,
//         "description":req.body.description
//     }

//     Doc.findByIdAndUpdate(req.params.id, docObj,{new:true}).exec((err,doc)=>{
//         if(err)
//         res.status(400).send(err)
//         else
//         res.status(200).json(doc)
//     })
// })
// INSERT INTO `member` (`id`, `member_account`, `member_password`, `gender`, `member_birthdate`, `update_time`, `validation`) VALUES ('1', 'membertest', 'test111', '1', '2021-01-01', current_timestamp(), '1');

//orderlist(id int auto_increment, primary key(id), order_number varchar(250) null, order_date date null, price varchar(100) null, order_status int(10) null,rent_or_purchase int(10) null,product1 varchar(100) null,product2 varchar(100) null,product3 varchar(100) null,product4 varchar(100) null,product5 varchar(100) null)
//Create Table
//
//product 
// app.get('/createtable', (req,res) =>{
//     const sql ='create table member(id int auto_increment, primary key(id),\
//     member_account varchar(250), member_password varchar(250), gender varchar(15), member_birthdate date)'
//     db.query(sql, (err,rows,fields)=>{
//         if(!err){
//             res.send('create table')
//         }else{
//             console.log(err)
//         }
//     })
// })


// app.get('/member', (req, res) =>{
//     db.query('SELECT * FROM member', (err, rows, fields) =>{
//         if(!err){
//             res.send(rows)
//         }
//         else{
//             console.log(err)
//         }
//     })
// })

// app.get('/member/:id',(req,res) => {
//     // const sql = 'SELECT * FROM member WHERE id=?'
//     const sql = 'select * from member inner join gender on member.gender = gender.id'
//     db.query(sql, [req.params.id], (err,rows,fields) =>{
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// })

// app.delete('/member/:id',(req,res) => {
//     db.query('DELETE member WHERE id=?', [req.params.id], (err,rows,fields) =>{
//         if(!err){
//             res.send("Deleted successfully")
//         }else{
//             console.log(err)
//         }
//     })
// })

