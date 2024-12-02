const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
const conf = require('../set'); // Assuming this file contains the owner number or other configuration.

// Command to check ping
zokou({
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀',
    fromMe: 'true',
},
async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start } = new Date().getTime();

    // Respond with speed info
    repondre(`*ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n \`\`\`${ping}\`\`\` *ᴍ/s*`);
    
    const { end } = new Date().getTime();

    // Send the response with the ping in ms
    await zokou.sendMessage(`*Pong!*\n \`\`\` ${end - start} \`\`\` *ms*`);

    // Include the owner's number in the response
    await zokou.sendMessage(`*Owner Number* : 😎 @${conf.NUMERO_OWNER}`);
});