import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "alive" || cmd === "uptime" || cmd === "runtime") {
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (3600 * 24));
    const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    const uptimeMessage = `*<----🤖 KHAN-MD IS ALIVE---->* 

> *📆 ${days} Day(s)*
> *🕰️ ${hours} Hour(s)*
> *⏳ ${minutes} Minute(s)*
> *⏲️ ${seconds} Second(s)*

 *<--------JawadTechX---------->*`;

    try {
      // Send the message with an image and caption
      await sock.sendMessage(m.from, {
        image: { url: 'https://files.catbox.moe/hzagwo.jpg' }, // Replace with your image URL
        caption: uptimeMessage,
      }, { quoted: m });
      console.log("Message sent successfully:", uptimeMessage);
    } catch (error) {
      console.error("Error sending alive message:", error);
    }
  }
};

export default alive;
