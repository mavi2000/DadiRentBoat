
import User from "../models/User.model.js";
import { sendMail } from "../services/mail/nodeMailer.js"
import ShortUniqueId from 'short-unique-id';
import InviteLink from "../models/InviteLink.model.js"
import crypto from 'crypto';
import bcrypt from 'bcryptjs';


// Function to generate a secure random token
const generateToken = () => {
  return crypto.randomBytes(20).toString('hex');
};


// export const createLink = async (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ error: 'Email is required' });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const uid = new ShortUniqueId({ length: 10 });
//     const token = uid();
//     const link = `${process.env.BASE_URL}/invite/${token}`;

//     const expiryDate = new Date();
//     expiryDate.setDate(expiryDate.getDate() + 1);

//     const inviteLink = await InviteLink.create({
//       user: user._id,
//       link,
//       token,
//       expiryDate,
//     });

//     await sendMail(email, link);

//     return res.status(200).json({ inviteLink });
//   } catch (error) {
//     console.error('Error creating link:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// };




// export const verifyLink = async (req, res) => {
//   try {
//     const token = req.params.token
  
//     let link = InviteLink.find({ token }).populate("user")
//     if (!link) {
//       return res.status(400).json({ message: "link not found." })
//     }
  
//     const currentDateTime = new Date()
//     if (currentDateTime > link.expiryDate) {
//       return res.status(400).json({ message: "Link has expired." })
//     }
  
//     link.user.isVerified = true
//     await link.user.save()
  
//     return res.status(200).json({ message: "User verified successfully." })
//   } catch (error) {
//     console.error('Error verifying link:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }


console.log("",process.env.BASE_URL)


export const createLink = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = generateToken();
    const link = `${process.env.BASE_URL}/reset-password?token=${token}`;

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1);

    // Save the token and its expiry date to your database
    await InviteLink.create({
      user: user._id,
      link, // Add the link field here
      token,
      expiryDate,
    });

    // Send the reset password link to the user's email
    await sendMail(email, link);

    return res.status(200).json({ message: 'Reset password link sent successfully.' });
  } catch (error) {
    console.error('Error creating reset password link:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


export const verifyLink = async (req, res) => {
  try {
    const { newPassword, token} = req.body;


if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required." });
    }

    const link = await InviteLink.findOne({ token: token }).populate('user');



    if (!link) {
      return res.status(400).json({ message: "Link not found." });
    }

    const currentDateTime = new Date();
    if (currentDateTime > link.expiryDate) {
      return res.status(400).json({ message: "Link has expired." });
    }

    const user = link.user;
    user.password = bcrypt.hashSync(newPassword, 10); 
    await user.save();

    await InviteLink.deleteOne({ token: token });

    return res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.error('Error verifying link:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};