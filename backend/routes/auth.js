const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
// const db2 = require('../dbconnection')
const member = require('../models/members')


router.post('/register',async (req,res)=>{
   member.collection.count({member_account:req.body.member_account},async (err,res)=>{
    if(res>0){
        console.log("已經有重複的帳號")
        return result = 1
        
    }else{
        const newmember =await new member(req.body)
        const savedmember = newmember.save()
        }
    })
})

router.get('/login',async(req,res)=>{
    if(req.session.member){
        res.send({loggedIn:true, member:req.session.member_account})
    }else{
        res.send({loggedIn:false})
    }
    
})

router.post('/login', async(req,res)=>{
    try{
        
        const user = await loginSchema_valid.validateAsync(req.body)
    
        if(!user ) throw createError.NotFound('請輸入有效的帳號與密碼')
        const doExist = await regSchema.findOne({account:user.account})
        const sql ='select member_account, member_password from member where member_account =?'
        db.query(sql,[req.body.member_account],(err,rows,fields) =>{
            const result = res.json(rows)
        })
        if(doExist){
            const token = generateToken(user)
            res.status(200).json({message:`歡迎 ${user.account}!`, token})
            res.json({auth:true, token:token})
        }            
    } catch (error) {
        if (error.isJoi === true)
          return next(createError.BadRequest('Invalid Username/Password'))
        console.log(err)
        next(error)
    }
})
module.exports = router;