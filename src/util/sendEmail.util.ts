import { createTransport } from "nodemailer";
import { iEmailRequest } from "../interfaces/email.interface";
import "dotenv/config"
import { AppError } from "../errors";
import Mailgen from "mailgen"

const sendEmail = async({to, subject, text}: iEmailRequest) => {

    const transporter = createTransport({
        host:"smtp.gmail.com",
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: "levitano96@gmail.com",
        to,
        subject,
        html: text
    }).then(() => {
        console.log("email send with sucess")
    }).catch((err) => {
        console.log(err)
        throw new AppError("Error sending email, try again later", 500)
    })
}


const resetPasswordTemplete = (userEmail:string, userName:string, protocol:string, host:string, resetToken:string) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Reset Password',
            link: `${protocol}://${host}`
        }
    });

    const email = {
        body: {
            name: userName,
            intro: 'You have received this email because a password reset request for your account was received.',
            action: {
                instructions: 'Click the button below to reset your password:',
                button: {
                    color: '#DC4D2F',
                    text: 'Reset your password',
                    link: `${protocol}://${host}/users/resetPassword/${resetToken}`
                }
            },
            outro: 'If you did not request a password reset, no further action is required on your part.'
        }
    };


    const emailBody = mailGenerator.generate(email)

    const emailTemplate = {
        to:userEmail,
        subject: "Reset password",
        text: emailBody
    }

    return emailTemplate
}




export { sendEmail, resetPasswordTemplete }