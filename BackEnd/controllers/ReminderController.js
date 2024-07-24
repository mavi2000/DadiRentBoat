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
