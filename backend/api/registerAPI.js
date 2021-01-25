const db = require('../dbconnection')

module.exports = {
    create:(data,callBack) =>{
        db.query(
            `insert into member(member_account, member_password, gender, member_birthdate) values(?,?,?,?)`, [data.member_account, data.member_password, data.gender, data.member_birthdate],
            (err, results, fields) =>{
                if(err) {
                return    callBack(err)    
                }
                return callBack(null, results)
            }
        )
    }
}