const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '🚀',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    
    // Start timing
    const start = new Date().getTime();

    // Send initial message
    const msg = await zk.sendMessage(dest, {
      text: '*𝑯𝒂𝒏𝒔 𝒎𝒅 𝒕𝒆𝒔𝒕𝒊𝒏𝒈 𝒑𝒊𝒏𝒈....*',
    }, {
      quoted: ms
    });

    // Calculate ping
    const end = new Date().getTime();
    const ping = end - start;

    // Edit initial message with speed result
    await zk.sendMessage(dest, {
      text: `*𝑺𝒑𝒆𝒆𝒅...*\n *${ping} 𝑴𝑺*`, 
      edit: {
        id: msg.key.id, 
        remoteJid: dest
      }
    });

    // Send video with a URL
    await zk.sendMessage(dest, {
      video: {
        url: 'https://files.catbox.moe/76oo5l.mp4' // Replace with your actual video URL
      },
      caption: '*Here is a response video to your ping test!*'
    });

    // React to the original message
    await zk.sendMessage(dest, {
      react: {
        text: "⚙️",
        key: ms.key
      }
    });
  }
);
