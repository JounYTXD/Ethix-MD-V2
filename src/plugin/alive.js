import config from '../../config.cjs';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (3600 * 24));
  const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);

  const uptimeMessage = `*<----🤖 KHAN-MD IS AlIVE---->* 

> *📆 ${days} Day(s)*
> *🕰️ ${hours} Hour(s)*
> *⏳ ${minutes} Minute(s)*
> *⏲️ ${seconds} Second(s)*

 *<--------JawadTechX---------->*`;

  const msg = generateWAMessageFromContent(m.from, {
    text: uptimeMessage,
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
};

export default alive;
