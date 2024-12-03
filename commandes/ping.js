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

    // Check if the message contains a tag to the bot/number
    const mentioned = commandOptions.mentions || []; // Get all mentions in the message
    let userDpUrl = ''; // Default empty string in case no mention is found

    // If the user tagged someone (your bot or number), get their profile photo (DP)
    if (mentioned.length > 0) {
      const user = mentioned[0]; // Assuming only one mention is made
      const userProfile = await zk.getProfilePicture(user.id); // Fetch user DP
      userDpUrl = userProfile || ''; // If a profile picture is found, use it
    }

    // Send video with ping details and user's DP (if tagged)
    const msg = await zk.sendMessage(dest, {
      video: {
        url: 'https://files.catbox.moe/76oo5l.mp4' // Provided video URL
      },
      caption: `*𝑷𝒊𝒏𝒈 𝑻𝒆𝒔𝒕*\n\n*𝑺𝒑𝒆𝒆𝒅:${ping}𝑴𝑺*\n\n*Here is a response video for your ping test!*\n\n${userDpUrl ? `*User's DP:* ${userDpUrl}` : ''}`
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
