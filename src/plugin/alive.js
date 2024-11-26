import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "alive', 'uptime', 'runtime") {
    const start = new Date().getTime();
    await m.React('🐥');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const menuText = `╭━━━〔 KHAN - Ai ⁩〕━━━···▸
┃╭──────────────···▸
♡│ *Owner :*  Jawad TechX
♡│ *User :*  ${m.pushName}
♡│ *Plugins :* Unlimited 
♡│ *Mode :* *${mode}*
♡│ *Platform :* *${os.platform()}*
♡│ *Prefix : *[- ${pref} -]*  
♡│ *Uptime :* *${days} Day(s)* ${hours} Hour(s)* ${minutes} Minute(s)* ${seconds} Second(s)*
┃╰──────────────···▸
╰━━━━━━━━━━━━━━━···▸
> *Powered By JawadTechX 🇵🇰*`;

    try {
      await sock.sendMessage(m.from, {
        image: { url: `https://files.catbox.moe/hzagwo.jpg` },
        caption: menuText,
      }, { quoted: m });
    } catch (error) {
      console.error("Error sending menu:", error);
    }
  }
}

export default alive;
