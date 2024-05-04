import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SENDER_MAIL,
      to: email,
      subject: subject,
      text: text,
    });

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
  }
};

module.exports = sendEmail;
