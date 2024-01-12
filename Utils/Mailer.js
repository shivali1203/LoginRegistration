const mailer = require('nodemailer')
const path = require('path')

module.exports.transporter = mailer.createTransport({
    service :'gmail',
  
    auth :{
        user:'shivalipatel.20.ce@iite.indusuni.ac.in',
        pass:'gjopxbfwcqlcuysh'
    }
})

module.exports.sendMail = async (to, subject, text) => {
    const mailOptions = {
        from :"shivalipatel.20.ce@iite.indusuni.ac.in",
        to : to, 
        subject : subject,
        text:"test mail",
        html:'<button id="button">CLICK HERE</button>'
    }
}



