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

    // Calculate ping
    const end = new Date().getTime();
    const ping = end - start;

    // Send video with ping details in the caption
    const msg = await zk.sendMessage(dest, {
      video: {
        url: 'https://files.catbox.moe/76oo5l.mp4' // Provided video URL
      },
      caption: `*𝑷𝒊𝒏𝒈 𝑻𝒆𝒔𝒕*\n\n*𝑺𝒑𝒆𝒆𝒅: ${ping} 𝑴𝑺*\n\n*Here is a response video for your ping test!*`
    });

    // React to the message containing the video
    await zk.sendMessage(dest, {
      react: {
        text: "⚙️",
        key: msg.key
      }
    });
  }
);
