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
      ms, arg, repondre, mentions
    } = commandOptions;

    // Generate a random ping value between 10ms and 1000ms
    const ping = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

    // Check if the bot's number is tagged
    const botNumber = await zk.getBotNumber(); // Get bot's number dynamically
    const isTagged = mentions?.includes(botNumber); // Check if bot's number is mentioned

    if (isTagged) {
      // Get user's profile picture
      const senderId = mentions[0]; // Assuming the first mention is the sender
      let userDpUrl;

      try {
        userDpUrl = await zk.getProfilePicture(senderId); // Fetch user's profile picture
      } catch (error) {
        userDpUrl = null; // Fallback in case DP is not available
      }

      // Respond with the user's DP and custom message
      await zk.sendMessage(dest, {
        image: { url: userDpUrl || 'https://via.placeholder.com/150' }, // Use placeholder if DP is unavailable
        caption: `*Don't tag my number!*\n\nI'm Hans MD, and my owner doesn't appreciate unnecessary tags.\n\n*𝑷𝒊𝒏𝒈 𝑺𝒑𝒆𝒆𝒅:* ${ping} 𝑴𝑺`
      });

      return; // Exit to avoid sending the default video
    }

    // Send default video with random ping value in the caption
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
