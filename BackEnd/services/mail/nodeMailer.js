import nodemailer from 'nodemailer';

// export const sendMail = async (email,link) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.APPP_PASSWORD,
//     },
//   });

//   const mailInfo = {
//     from: process.env.EMAIL,
//     to: email,
//     subject: 'Welcome to Dadi Rent Boat',
//     text: `Welcome to Dadi Rent Boat We're glad to have you on board. your invite link is ${link}.`,
//     html: `<p>Welcome to Dadi Rent Boat We're glad to have you on board. your invite link is ${link}.</p>`,
//   };

//   const info = await transporter.sendMail(mailInfo);
//   console.log('Message sent: %s', info.messageId);
// };




export const sendMail = async (email, link, subject, footerMessage) => {
    return new Promise(async (resolve, reject) => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL, // your email
                    pass: process.env.APP_PASSWORD // your app password
                }
            });

            const mailOptions = {
                from: `B2B  <${process.env.EMAIL}>`,
                to: email,
                subject: subject || 'OTP for B2B',
                text: `Your Link is ${link}`,
                html: `<h1>Your Link is ${link}</h1>
                ${footerMessage ? `<p>${footerMessage}</p>` : ''}`

            };

            const info = await transporter.sendMail(mailOptions);
            resolve({ success: true, message: 'Reset Link sent successfully' });
        } catch (error) {
            reject({ success: false, message: 'Something went wrong', error: error });
        }
    });
}

const emailConfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.APP_PASSWORD // your app password
    }
};
