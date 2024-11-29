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

    // Construct the message with a button to contact the owner
    await zk.sendMessage(dest.chat, {
      text: `*Hi ✌️*\n` +
            `*Hans-MD-Speed is:* \`\`\`${randomPing}\`\`\` *ms*\n` +
            `*Pong!*\n\n` +
            `Need assistance? Contact the owner below:`,
      buttons: [
        {
          buttonId: 'contact_owner',
          buttonText: { displayText: '📞 Contact Owner' },
          type: 1,
        },
      ],
      footer: 'Hans-MD',
      mentions: [ownerNumber],
    });

    // Handle button interaction (if supported by your framework)
    zk.on('buttonResponse', async (buttonResponse) => {
      if (buttonResponse.buttonId === 'contact_owner') {
        await zk.sendContact(dest.chat, {
          name: 'Owner',
          number: ownerNumber,
          profilePic: await zk.getProfilePicture(ownerNumber), // Fetch owner DP if supported
        });
      }
    });
  }
);