import config from '../../config.cjs';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent } = pkg;

const alive = async (m, Matrix) => {
  const prefix = config.PREFIX; // Assuming you have a prefix defined in your config
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  // Check if the command is one of the expected ones
  if (['alive', 'uptime', 'runtime'].includes(cmd)) {
    try {
      console.log("Received command:", cmd); // Log the received command

      const uptimeSeconds = process.uptime();
      const days = Math.floor(uptimeSeconds / (3600 * 24));
      const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((uptimeSeconds % 3600) / 60);
      const seconds = Math.floor(uptimeSeconds % 60);

      const uptimeMessage = `*KHAN MD V2 IS ONLINE*
╭❐
┇ *${days} Day(s)*
┇ *${hours} Hour(s)*
┇ *${minutes} Minute(s)*
┇ *${seconds} Second(s)*
╰❑`;

      const msg = generateWAMessageFromContent(m.from, {
        text: uptimeMessage,
      }, {});

      console.log("Sending message:", uptimeMessage); // Log the message being sent

      await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      });

      console.log("Message sent successfully"); // Log success
    } catch (error) {
      console.error("Error in alive function:", error); // Log any errors
    }
  }
};

export default alive;
