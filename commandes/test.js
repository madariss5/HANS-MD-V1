"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou(
  { 
    nomCom: "test", 
    reaction: "🤓", 
    nomFichier: __filename 
  }, 
  async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!");
    
    let z = '𝐇𝐞𝐥𝐥𝐨, 𝐭𝐡𝐢𝐬 𝐢𝐬 *ℍ𝔸ℕ𝕊 𝕄𝔻🇹🇿* \n\n' + 
            "I'm a WhatsApp bot multi-device created ";
    let d = ' by *hanstz Tech⚠️*';
    let varmess = z + d;

    // Your video link
    var video = 'https://files.catbox.moe/sgtk23.mp4';

    // Buttons
    const buttons = [
      {
        buttonId: 'owner_contact',
        buttonText: { displayText: '📞 Contact Owner' },
        type: 1,
      },
      {
        buttonId: 'join_group',
        buttonText: { displayText: '🔗 Join Owner Group' },
        type: 1,
      },
    ];

    // Button message
    const buttonMessage = {
      video: { url: video },
      caption: varmess,
      footer: 'Choose an option below:',
      buttons: buttons,
      headerType: 5,
    };

    // Send button message
    await zk.sendMessage(dest, buttonMessage);

    // Handle button clicks
    zk.on('message', async (msg) => {
      const buttonId = msg?.message?.buttonsResponseMessage?.selectedButtonId;

      if (buttonId === 'owner_contact') {
        // Send owner contact
        await zk.sendMessage(dest, {
          contacts: {
            displayName: 'Owner Hans-MD',
            contacts: [{ vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Hans MD\nTEL;TYPE=CELL;TYPE=VOICE;WAID=255692540143:+255 692 540 143\nEND:VCARD` }],
          },
        });
      } else if (buttonId === 'join_group') {
        // Send group link
        const groupLink = 'https://chat.whatsapp.com/LNsww898t4RAIYxd2unyHY'; // Your group link
        await zk.sendMessage(dest, { text: `🔗 Join our group here: ${groupLink}` });
      }
    });
  }
);

console.log("Test video command with buttons and interactions updated!");