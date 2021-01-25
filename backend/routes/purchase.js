const express = require('express')
const router = express.Router()
const purchases = require('../models/purchase')
const members = require('../models/members')

//全部商品
router.get('/', async (req,res) =>{
    const purchase = await purchases.find()
    console.log(purchase)
    res.json(purchase)
})

//判定是否登入會員，並找尋match會員id
router.get('/get/:id/:member_id?', async(req,res) => {
    // console.log("id",req.params.id );
    let prod = await purchases.findById({_id: req.params.id})
    const member_id = req.params.member_idS
    if(member_id) {
        const member = await members.findById({_id: member_id})
        const purchase_id = req.params.id
        let collections = member.collections
        // console.log(prod)
        let member_collection = collections.find(obj => obj.purchase_id == purchase_id)

        let new_prod = JSON.parse(JSON.stringify(prod)) // copy
        new_prod.member_collection = (member_collection ? true : false)
        prod = new_prod
    }
    res.json(prod);
})

//確認是否加入收藏
router.patch('/update/:id', async(req,res) =>{
    const member = await members.findById({_id: 1});
    const purchase_id = req.params.id;
    let collections = member.collections;
    let exist = collections.findIndex(obj => obj.purchase_id == purchase_id);
    if(exist < 0) { // not found 
        member.collections.push({
            purchase_id: parseInt(purchase_id)
        })
    }
    else {
        member.collections.splice(exist, 1)
    }
    const newMember = new members(member);
    const saveMember = await newMember.save();
    res.send(saveMember)
})




//搜尋符合場景的商品
//路由"/get"這裏要設定不一樣，不然會先找到上面符合的，occasion就變成id
router.get('/geto/:occasion', async(req,res) => {
    const prod_occasion =await purchases.find({ occasion_category: { $in: [req.params.occasion]} })
    // console.log(prod_occasion)
    res.json(prod_occasion);
})
//這是一個找字串的方法，在memebr欄位中的陣列資料找kevin
//db.getCollection('library').find({member:{$in:[“Kevin”]}})
// db.getCollection('chatroom').find({messages:{$elemMatch:{content:”Hello”}}}) 

//搜尋符合尺寸分類的商品
router.get('/getc/:category', async(req,res) => { 
    const prod_category =await purchases.find({ product_category: req.params.category  })
    console.log(prod_category);
    res.json(prod_category);
})

//cardsm推薦限制4筆，並排除自己
router.get('/getr/:category?/:id?', async(req,res) => { 
    console.log(req.params.id)
    console.log(req.params.category);
    const prod_category =await purchases.find( { product_category: {$eq: req.params.category}  , _id : {$ne:req.params.id}  }).limit(4)
    // console.log(prod_category);
    res.json(prod_category);
})

//nineGrid限制9筆
router.get('/getn/:category', async(req,res) => { 
    const prod_category =await purchases.find({ product_category: req.params.category}).limit(9)
    console.log(prod_category);
    res.json(prod_category);
})

//搜尋商品名稱關鍵字
router.get('/search/:keyword', async(req,res) => {
    // console.log("搜尋全部商品: "+ req.params.keyword);
    const keyword =await purchases.find({ product_name : {$regex: req.params.keyword} })
    res.json(keyword);
})




//還沒有用到的
//Create new product
router.post('/add', async(req,res) => {
    const newproduct = new purchases(req.body);
    const savedproduct = await newproduct.save();
    res.json(savedproduct)
})
//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await purchases.findByIdAndDelete({_id:req.params.id})
    res.json(result)
})

//依inventory排序：高到低
router.get('/low', async(req,res) => {
    // console.log("依照價格排序: "+ req.params.price);
    const price =await purchase.find({}).sort({product_inventory:-1})
    res.json(price);
})

//依inventory排序：低到高
router.get('/price', async(req,res) => {
    const price =await product.find({}).sort({product_inventory:1})
    res.json(price);
    console.log(price)
})

// router.post('/', async(req,res)=> {
//         console.log(req.body)
//         const test =await new purchase(req.body)
//         const saveditem =test.save()

// })

module.exports = router

