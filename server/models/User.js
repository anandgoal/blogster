const db = require('../config/db');

// check Email or phone already exist or not 
exports.checkEmailExist = async(email) => {

    try {
        const [{ usercount }] = await db.execute('select COUNT(*) as usercount from users WHERE email = ? OR phone = ? ',[email,phone]);
        return usercount;
    } catch (e) {
        // Log Errors
        throw Error('Something went wrong');
    }
}
