import nodemailer from 'nodemailer';

export const sendMail = async (verficationLink) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.PASS,
    },
  });

  const mailInfo = {
    from: process.env.SENDER_MAIL,
    to: email,
    subject: 'Welcome to Dadi Rent Boat',
    text: `Welcome to Dadi Rent Boat We're glad to have you on board. your invite link is ${verficationLink}.`,
    html: `<p>Welcome to Dadi Rent Boat We're glad to have you on board. your invite link is ${verficationLink}.</p>`,
  };

  const info = await transporter.sendMail(mailInfo);
  console.log('Message sent: %s', info.messageId);
};
