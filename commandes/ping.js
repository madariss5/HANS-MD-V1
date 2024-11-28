const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');

zokou(
  {
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    fromMe: 'true',
  },
  async (dest, zk, commandeOptions) => {
    const { arg, repondre } = commandeOptions;
    const start = new Date().getTime();

    // Define the smaller bot image URL
    const botImageUrl = 'https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_scale/l1i9o4.jpg'; // Use your resized image URL here

    // Measure the end time
    const end = new Date().getTime();
    const ping = end - start;

    // List of fun and playful emojis for reactions
    const funEmojis = [
      '😜', '🤣', '🤪', '😎', '💥', '🎉', '🎈', '🥳', '😇', '👽', '🦄', '🤩', '💃', '🕺', '🍕', '🍟', '🍩', '🧸', '🎮', '🎲',
      '🎤', '🎧', '🎸', '🎺', '🥁', '🌈', '✨', '🤖', '🦸‍♂️', '🦸‍♀️', '🦹‍♂️', '🦹‍♀️', '😸', '🐱', '🐶', '🐯', '🐨', '🦊', 
      '🦁', '🦓', '🦒', '🐵', '🐯', '🐒', '🐧', '🦆', '🐦', '🐢', '🦦', '🦋', '🐞', '🦗', '🦜', '🐙', '🦑', '🍀', '🌸', '🌻',
      '🍉', '🍇', '🍓', '🍍', '🍋', '🍊', '🍒', '🍎', '🍏', '🍒', '🍠', '🍪', '🍫', '🍦', '🥧', '🥨', '🍔', '🌭', '🍗', '🥩', 
      '🍕', '🍜', '🍲', '🍱', '🍣', '🥘', '🥟', '🍤', '🦞', '🥩', '🍳', '🥓', '🥒', '🧃', '🍺', '🍷', '🍻', '🍸', '🍹', '🥂', 
      '🥃', '🥤', '🧉', '🍾', '🍶'
    ];

    // Select a random fun emoji from the list
    const randomFunEmoji = funEmojis[Math.floor(Math.random() * funEmojis.length)];

    // Send response with bot image, ping info, and random fun emoji reaction
    await zk.sendMessage(dest, {
      caption: `🎉 *THIS IS HANS MD WA BOT IN 2024* 🎉\n\n*💥 ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴇ-ɪs* 💥\n\`\`\`999999999\`\`\` *ms*\n${randomFunEmoji} Let's have fun! 🎉`,
      image: { url: botImageUrl }, // Attach the resized bot image
    });
  }
);