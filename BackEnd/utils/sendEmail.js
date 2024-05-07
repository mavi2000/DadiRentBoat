import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
      html: html,
    });

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
  }
};
