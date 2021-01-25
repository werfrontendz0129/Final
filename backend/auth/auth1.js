const express = require("express")
const db = require('../dbconnection')
const generateToken = require("./token")
// const bcrypt = require("bcryptjs");
const router = express.Router()
// const regSchema = require('../models/member')
// const createError = require('http-error')
const { regSchema_valid, loginSchema_valid } = require('../helper/validation')

router.post('/hello', async(req,res,next) => {
    // try{
        // const { member_account, member_password, gender, member_birthdate } = req.body
        var account = req.body.member_account
        var password = req.body.member_password
        var gender = req.body.gender
        var member_birthdate = req.body.member_birthdate

        console.log(req.body)
        const sql = 'insert  into member(member_account,member_password,gender,member_birthdate) values(?,?,?,?)'
        // const sql = 'insert into member(member_account,member_password,gender,member_birthdate)'
        db.query(sql, [req.body],(err, results, field)=>{
         if(err){
            console.log(err)
         } else{
            res.send(results)
         }
    })
})

router.post('/register', async(req,res,net)=>{
    try{
        const result = await regSchema_valid.validateAsync(req.body)

        const doExist = await regSchema.findOne({account:result.member_account})
        
        if(doExist) throw createError.Conflict(`${result.account}已經被註冊`)

        const user = new regSchema(result)
        const savedUser = await user.save()
        res.json(savedUser)

        

    }catch(error){
        if(error.isJoi === true) error.status=422 
        console.log(err)
        next(error)
    }
})

router.post('/login', async(req,res,next) => {
    try{
        
        // const { member_account, member_password } = req.body
        // res.send(req.body)
        const user = await loginSchema_valid.validateAsync(req.body)
        // res.send(user)
        if(!user ) throw createError.NotFound('請輸入有效的帳號與密碼')
        const doExist = await regSchema.findOne({account:user.account})
        const sql ='select member_account, member_password from member where member_account =?'
        db.query(sql,[req.body.member_account],(err,rows,fields) =>{
            const result = res.json(rows)
        })
        if(doExist){
            const token = generateToken(user)
            res.status(200).json({message:`歡迎 ${user.account}!`, token})
            // req.session.user
            // res.send('hi')
            res.json({auth:true, token:token})
        }            
    } catch (error) {
        if (error.isJoi === true)
          return next(createError.BadRequest('Invalid Username/Password'))
        console.log(err)
        next(error)
    }
})


//mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3
//

module.exports = router;