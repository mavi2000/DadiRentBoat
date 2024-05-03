import InviteLink from "../models/InviteLink.model.js"
import { sendMail } from "../services/mail/nodeMailer.js"

export const createLink = async (req, res) => {
  try {
    const userId = req.user._id
  
    const uid = new ShortUniqueId({ length: 10 })
  
    const token = uid.rnd()
  
    const link = `${process.env.BASE_URL}/invite/${token}`
  
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 1)
  
    const inviteLink = new InviteLink.create({
      user: userId,
      link,
      token,
      expiryDate,
    })

    await sendMail(link)
  
    return res.status(200).json(inviteLink)
  } catch (error) {
    console.error('Error creating link:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const verifyLink = async (req, res) => {
  try {
    const token = req.params.token
  
    let link = InviteLink.find({ token }).populate("user")
    if (!link) {
      return res.status(400).json({ message: "link not found." })
    }
  
    const currentDateTime = new Date()
    if (currentDateTime > link.expiryDate) {
      return res.status(400).json({ message: "Link has expired." })
    }
  
    link.user.isVerified = true
    await link.user.save()
  
    return res.status(200).json({ message: "User verified successfully." })
  } catch (error) {
    console.error('Error verifying link:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
