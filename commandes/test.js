"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ 
    nomCom: "test", 
    reaction: "🤓", 
    nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!");

    // Message content
    let z = '𝐡𝐞𝐥𝐥𝐨𝐰 𝐭𝐡𝐢𝐬 𝐢𝐬 *ℍ𝔸ℕ𝕊 𝕄𝔻🇹🇿  * \n\n' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *hanstz Tech⚠️ *';
    let varmess = z + d;

    // Video URL
    let videoUrl = 'https://files.catbox.moe/sgtk23.mp4';

    // MP3 Audio URL
    let audioUrl = 'https://files.catbox.moe/3yvrmf.mp3';

    // Send video with caption
    await zk.sendMessage(dest, { video: { url: videoUrl }, caption: varmess });
    console.log("Video message sent successfully!");

    // Send audio with the same caption
    await zk.sendMessage(dest, { audio: { url: audioUrl }, caption: varmess });
    console.log("Audio message sent successfully!");
});

console.log("mon test");
