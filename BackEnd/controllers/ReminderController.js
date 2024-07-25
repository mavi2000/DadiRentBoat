import Reminder from "../models/Reminder.js";
import cron from 'node-cron';
import { ReminderEmail } from "../services/mail/nodeMailer.js";

export const sendReminder = async (req, res) => {
  console.log("req", req.body);
  try {
    const { userId, userName, subject, message, sendImmediately, specificTime, specificDate, email, footerMessage } = req.body;

    let scheduledFor = null;
    if (!sendImmediately) {
      if (specificDate && specificTime) {
        scheduledFor = new Date(`${specificDate}T${specificTime}:00`);
        if (isNaN(scheduledFor)) {
          return res.status(400).send({ error: 'Invalid date or time format' });
        }
      } else {
        return res.status(400).send({ error: 'Specific date and time required' });
      }
    }

    const newReminder = new Reminder({
      userId,
      userName,
      subject,
      message,
      sendImmediately,
      specificTime: sendImmediately ? null : specificTime,
      specificDate: sendImmediately ? null : specificDate,
      scheduledFor,
      status: 'scheduled',
    });

    await newReminder.save();

    const markAsCompleted = async () => {
      newReminder.status = 'completed';
      await newReminder.save();
    };

    if (!sendImmediately && scheduledFor) {
      // Convert scheduledFor to a cron format string
      const cronTime = `${scheduledFor.getUTCMinutes()} ${scheduledFor.getUTCHours()} ${scheduledFor.getUTCDate()} ${scheduledFor.getUTCMonth() + 1} *`;
      // Schedule the reminder
      const job = cron.schedule(
        cronTime,
        async () => {
          await ReminderEmail(email, subject, message, footerMessage);
          await markAsCompleted();
        },
        { scheduled: true, timezone: "UTC" }
      );

      job.start();
    } else {
      // Send the reminder immediately
      await ReminderEmail(email, subject, message, footerMessage);
      await markAsCompleted();
    }

    res.status(201).send(newReminder);
  } catch (error) {
    console.error("Error in sendReminder:", error);
    res.status(400).send(error);
  }
};



export const getAllReminders = async (req, res) => {
    try {
      const reminders = await Reminder.find();
      res.status(200).json(reminders);
    } catch (error) {
      console.error("Error in getAllReminders:", error);
      res.status(400).send({ error: 'Failed to fetch reminders' });
    }
  };



export const deleteReminder = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the reminder by ID and delete it
      const deletedReminder = await Reminder.findByIdAndDelete(id);
  
      if (!deletedReminder) {
        return res.status(404).json({ error: 'Reminder not found' });
      }
  
      res.status(200).json({ message: 'Reminder deleted successfully' });
    } catch (error) {
      console.error("Error in deleteReminder:", error);
      res.status(500).json({ error: error.message });
    }
  };  