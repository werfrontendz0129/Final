const Joi = require('@hapi/joi')
const regSchema_valid = Joi.object({
    member_account:Joi.string().email().lowercase().required(),
    member_password:Joi.string().min(8).required(),
    gender:Joi.string().required(),
    member_birthdate:Joi.date().required(),
})

const loginSchema_valid = Joi.object({
    member_account:Joi.string().email().lowercase().required(),
    member_password:Joi.string().min(6).required(),
})
module.exports = { regSchema_valid , loginSchema_valid}