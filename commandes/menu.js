const {
  zokou
} = require("./../framework/zokou");

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

    // Generate a random ping value between 10ms and 1000ms
    const ping = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

    // Send video with random ping value in the caption
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
