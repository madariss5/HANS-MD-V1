const { handleAntistickerCommand, handleStickerMessage } = require('./antisticker');

// Register the `antisticker` command
zokou({
  nomCom: "antisticker",
  categorie: "Group",
  reaction: "🚫"
}, async (dest, zk, commandeOptions) => {
  await handleAntistickerCommand(dest, zk, commandeOptions);
});

// Listen for all messages and process stickers
zokou.on('message', async (message) => {
  await handleStickerMessage(message, zokou);
});