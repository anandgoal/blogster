const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

/**
 * User signup
 * @param {String} FirstName
 * @param {String} LastName 
 * @param {String} Email
 * @param {String} Nickname
 * @param {Int} Phone
 * @access Public
 */

exports.userSignup = async (req,res) =>{
    let { firstname,lastname, email, phone, nickname } = req.body;
    if (!firstname || !email || !phone) {
        return res.status(400).json({ message: 'Email, phone and firstName are required' });
    }

    try{
        // check email id or phone already exist or not
      
        const checkExistingUserCount = await UserService.checkExistingUserExist(email,phone);
        console.log(checkExistingUserCount)
        if(checkExistingUserCount > 0) {
            return res.status(200).json({ status: false, msg: "Email or phone already exists!"}); 
        }
    }catch(err){
        console.log(err)
        res.status(200).json({ status: false, msg: 'something went wrong'});    
    }
}
