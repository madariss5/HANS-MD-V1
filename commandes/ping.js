const { zokou } = require("../framework/zokou");
const conf = require('../set'); // Assuming this file contains the owner's number configuration

zokou(
  {
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀',
    fromMe: true,
  },
  async (dest, zk, commandeOptions) => {
    const { repondre } = commandeOptions;

    // Generate a random ping between 50ms and 500ms
    const randomPing = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    const ownerNumber = conf.NUMERO_OWNER; // Owner's number from the configuration file

    await repondre(
      `*Hi ✌️*\n` +
      `*Hans-MD-Speed is:* \`\`\`${randomPing}\`\`\` *ms*\n` +
      `*@${ownerNumber}, Pong!*`
    );
  }
);