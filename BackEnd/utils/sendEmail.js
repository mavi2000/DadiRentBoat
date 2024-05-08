import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: 'amirsuliman10101@gmail.com',
        pass: 'xybl bwwm puli ekid',
      },
    });

    await transporter.sendMail({
      from: 'amirsuliman10101@gmail.com',
      to: email,
      subject: subject,
      html: html,
    });

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
  }
};
