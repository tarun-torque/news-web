const express = require('express');
const router = express.Router();
const { sendBulkEmails } = require('../controllers/newsEmailSender');
const cron = require('node-cron');

// Define the cron schedule to run every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  try {
    await sendBulkEmails();
    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
});

module.exports = router;