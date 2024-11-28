const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');
const { random } = require('lodash'); // Import random function for random reactions

zokou({
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 
},
async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const start = new Date().getTime();

    // Randomly select one of the reactions from a list
    const reactions = ['🚀', '⚡', '🔥', '🌐', '💨', '🚀✨'];
    const randomReaction = reactions[random(0, reactions.length - 1)];

    // Calculate a random ping speed between 50 and 200 ms
    const randomPing = random(50, 200);

    // Simulate response with random ping speed and reaction
    await repondre(`*ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n\`\`\`${randomPing} ms\`\`\` *ᴍ/s*`);

    const end = new Date().getTime();

    // Send a message with the ping calculation
    await zokou.sendMessage('*Pong!*\n```' + (end - start) + ' ms```', {
        image: 'https://files.catbox.moe/l1i9o4.jpg', // Image URL as requested
        caption: randomReaction, // Add the random reaction to the message
    });
});