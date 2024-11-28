const { zokou } = require("../framework/zokou");

let antiGifActive = false; // State of the anti-GIF feature

zokou({
  nomCom: "antigif",
  categorie: "General",
  reaction: "🚫"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, arg } = commandeOptions;

  try {
    // Handle command arguments for toggling anti-gif
    if (arg.length > 0) {
      const action = arg[0].toLowerCase();
      if (action === "on") {
        antiGifActive = true;
        await zk.sendMessage(origineMessage.key.remoteJid, {
          text: "✅ Anti-GIF is now *active*!"
        });
        return;
      } else if (action === "off") {
        antiGifActive = false;
        await zk.sendMessage(origineMessage.key.remoteJid, {
          text: "❌ Anti-GIF is now *deactivated*!"
        });
        return;
      }
    }

    // Check if anti-GIF is active
    if (!antiGifActive) return;

    // Log the entire message structure for debugging
    console.log("Incoming message structure:", ms);

    // Detect GIF messages (look for video with mimetype "video/gif")
    if (
      ms.message &&
      ms.message.videoMessage &&
      ms.message.videoMessage.mimetype === "video/gif"
    ) {
      console.log("GIF detected!"); // Log when a GIF is detected
      console.log("GIF Message details:", ms.message.videoMessage); // Log details of the GIF message

      // Delete the GIF message
      await zk.deleteMessage(origineMessage.key.remoteJid, {
        id: origineMessage.key.id,
        remoteJid: origineMessage.key.remoteJid,
        fromMe: false, // Ensure it's not the bot's message
      });

      // Optionally, send a warning message
      await zk.sendMessage(origineMessage.key.remoteJid, {
        text: "🚫 GIFs are not allowed in this chat!",
        mentions: [origineMessage.key.participant],
      });
    } else {
      console.log("No GIF detected in this message."); // Log when no GIF is found
    }
  } catch (error) {
    console.error("Error in anti-GIF script:", error);
    await zk.sendMessage(origineMessage.key.remoteJid, {
      text: "❌ An error occurred while processing the anti-GIF command.",
    });
  }
});