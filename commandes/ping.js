const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');

zokou(
  {
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀',
    fromMe: 'true',
  },
  async (dest, zk, commandeOptions) => {
    const { arg, repondre } = commandeOptions;
    const start = new Date().getTime();

    // Define the bot image URL
    const botImageUrl = 'https://files.catbox.moe/l1i9o4.jpg';

    // Measure the end time
    const end = new Date().getTime();
    const ping = end - start;

    // Send response with bot image and ping info
    await zk.sendMessage(dest, {
      caption: `*ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n\`\`\`${ping}\`\`\` *ms*`,
      image: { url: botImageUrl }, // Attach the bot image
    });
  }
);