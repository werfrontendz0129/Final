const { genSaltSync, hashSync } = require('bcryptjs')
const {create} = require('./registerAPI')

module.exports = {
    createSalt: (req, res) =>{
        const body = req.body
        const salt = genSaltSync(10)
        body.member_password = hashSync(body.member_password, salt)
        create(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status.json({
                    success:0,
                    message:"伺服器連線可能有異常@@"
                })
            return res.status(200).json({
                success:1,
                data:results
            })
            }
        })
    }
}