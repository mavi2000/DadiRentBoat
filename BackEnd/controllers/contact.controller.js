import Joi from 'joi';
import nodemailer from 'nodemailer';

export const contact = (req, res) => {
  const validation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.PASS,
    },
  });

  try {
    const { name, email, phoneNumber, subject, message } = req.body;
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: subject,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phoneNumber}
      Subject: ${subject}
      Message: ${message || 'N/A'}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to submit form' });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Form submitted successfully' });
      }
    });
  } catch (error) {
    console.log('Contact error', error);
  }
};
