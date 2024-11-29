"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ 
    nomCom: "test", 
    reaction: "🤓", 
    nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!");
    let z = '𝐡𝐞𝐥𝐥𝐨𝐰 𝐭𝐡𝐢𝐬 𝐢𝐬 *ℍ𝔸ℕ𝕊 𝕄𝔻🇹🇿  * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *hanstz Tech⚠️ *';
    let varmess = z + d;

    // Video URL to send
    let videoUrl = 'https://files.catbox.moe/sgtk23.mp4';  // Updated to the provided video URL

    // Send video instead of image
    await zk.sendMessage(dest, { video: { url: videoUrl }, caption: varmess });
});

console.log("mon test");