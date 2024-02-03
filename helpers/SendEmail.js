import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

// Amitoz 25/01/24
// Input Example >> data = {email:"Ehere Input",subject:"Hello Amit",text:"Wellcome Back!"}
// Response {err:true Or False,msg: from the func}
//EMAIL_PASSWORD='qtns efli pdoq qune'
//EMAIL_USER=''

export const SendEmail = async (data) => {
    try {
        if (!data?.email || !data?.subject || !data?.text)
            return { err: true, msg: 'The parameters must be entered: email + subject + text' };
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ikitchen230@gmail.com', //process.env.EMAIL_USER,
                pass: 'qtns efli pdoq qune' //process.env.EMAIL_PASSWORD
            }
            
        });

        const mailOptions = {
            to: `${data.email}`,
            subject: `${data.subject}`,
            text: `${data.text}`
        };

        const info = await transporter.sendMail(mailOptions);
        return { err: false, msg: info.response };
    } catch (error) {
        return { err: true, msg: error.message };
    }
};
