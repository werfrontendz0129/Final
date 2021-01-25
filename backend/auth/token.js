const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (user) => {
    const payload = {
        member_id:999,
        username:member_account,
    }
    const secret = process.env.SECRET

    const options = {
        expiresIn:"1d"
    }   
    return jwt.sign(payload, secret, options)
}