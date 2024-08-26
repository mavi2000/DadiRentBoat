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
                from: `DadiRent  <${process.env.EMAIL}>`,
                to: email,
                subject: subject || 'Reset Link fROM DadiRent',
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




export const ReminderEmail = async (email, subject, message, footerMessage) => {
    return new Promise(async (resolve, reject) => {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL, // your email
            pass: process.env.APP_PASSWORD, // your app password
          },
        });
  
        const mailOptions = {
          from: `DadiRent <${process.env.EMAIL}>`,
          to: email,
          subject: subject || 'Reminder from DadiRent',
          text: message,
          html: `<h1>${message}</h1>
                 ${footerMessage ? `<p>${footerMessage}</p>` : ''}`,
        };
  
        const info = await transporter.sendMail(mailOptions);
        resolve({ success: true, message: 'Email sent successfully' });
      } catch (error) {
        reject({ success: false, message: 'Something went wrong', error: error });
      }
    });
  };




  export const cancelEmail = async (email, subject, message) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL, // your email
          pass: process.env.APP_PASSWORD, // your app password
        },
      });
  
      const mailOptions = {
        from: `DadiRent <${process.env.EMAIL}>`,
        to: email,
        subject: subject || 'Notification from DadiRent',
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };




  export const sendPaymentConfirmationEmail = async (user, paymentDetails) => {
    console.log("email",user.email)
    try {
      // Create a transporter object using SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Or any other service you prefer
        auth: {
          user: process.env.EMAIL, // your email
          pass: process.env.APP_PASSWORD, // your app password
        },
      });
  
      // Compose the email
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: user.email, // List of recipients
        subject: 'Payment Successful - Boat Rental Service', // Subject line
        html: `
          <h1>Payment Successful</h1>
          <p>Dear ${user.username},</p>
          <p>Your payment of <strong>€${(paymentDetails.unitAmount / 100).toFixed(2)}</strong> for renting the boat <strong>${paymentDetails.boatName}</strong> has been successfully processed.</p>
          <p><strong>Booking Details:</strong></p>
          <ul>
            <li><strong>Boat Name:</strong> ${paymentDetails.boatName}</li>
        
            <li><strong>Total Amount:</strong> €${(paymentDetails.totalAmount / 100).toFixed(2)}</li>
            <li><strong> Dates:</strong> ${paymentDetails.availableDates.join(', ')}</li>
          </ul>
          <p>Thank you for choosing our service.</p>
        `,
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log(`Payment confirmation email sent to ${user.email}`);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Re-throw the error to be handled in the calling function
    }
  };