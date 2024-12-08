"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
const fs = require("fs");
const path = require("path");

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

    // Video file URL
    let videoUrl = 'https://files.catbox.moe/sgtk23.mp4';

    // Photo file path (local)
    let photoPath = path.join(__dirname, "../media/king.jpeg");

    // Check if the photo file exists
    if (!fs.existsSync(photoPath)) {
        console.error("Photo file not found at:", photoPath);
        return;
    }

    // Read the local photo file
    let photoBuffer = fs.readFileSync(photoPath);

    // Send video with caption
    await zk.sendMessage(dest, { video: { url: videoUrl }, caption: varmess });
    console.log("Video message sent successfully!");

    // Send photo with caption
    await zk.sendMessage(dest, { image: photoBuffer, caption: varmess });
    console.log("Photo message sent successfully!");
});

console.log("mon test");
