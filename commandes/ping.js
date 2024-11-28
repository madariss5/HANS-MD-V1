const { zokou } = require("../framework/zokou");
const { default: axios } = require('axios');

zokou({ 
  nomCom: 'ping',
  desc: 'To check ping with random values and photo',
  Categorie: 'General',
  reaction: '🚀', 
  fromMe: 'true', 
},
async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  
  // Generate a random ping time between 50ms and 500ms for fun
  const randomPing = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

  // Owner's photo URL
  const ownerPhotoUrl = "https://files.catbox.moe/l1i9o4.jpg";  // Updated image URL

  // Send the random ping time with a photo
  await repondre(`
    *ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n
    *Ping*: \`\`\`${randomPing} ms\`\`\`
    *ᴏᴡɴᴇʀ'𝑠 ᴘʜᴏᴛᴏ:*\n
    ![Owner's photo](${ownerPhotoUrl})
  `);
  
  // Send the ping calculation response
  const start = new Date().getTime();
  const end = new Date().getTime();
  await zokou.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*');
}
);