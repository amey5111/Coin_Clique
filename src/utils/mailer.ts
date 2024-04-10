import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs'
export const sendEmail = async({email, emailType, userId}:any) =>
{
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(),10)
        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId,{
                $set:{
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() +3600000
                }
            });

        }
        else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId,{
                $set:{
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() +3600000
                }
            });

        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "083bc6608c9973",
              pass: "04339436cf993f"
            }
          });

          const mailOptions = {
            from: 'amey@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email":"Reset Your Password", // Subject line
            html: `<p>click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY' ? "Verify your email":"Reset Your Password"}
            or copy and paste the link bellow in the browser<br/>
            ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`,
          }
          const mailResponse = await transport.sendMail(mailOptions);
          return mailResponse
    } catch (error: any) {
        throw new Error(error.message)
    }
}