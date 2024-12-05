"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
const fs = require("fs"); // Import file system module
const path = require("path"); // Import path module for cross-platform compatibility

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

    // Local WAV file path
    let wavPath = path.join(__dirname, "../media/test.wav");

    // Check if the WAV file exists
    if (!fs.existsSync(wavPath)) {
        console.error("WAV file not found at:", wavPath);
        return;
    }

    // Read the local WAV file
    let wavBuffer = fs.readFileSync(wavPath);

    // Send video with caption
    await zk.sendMessage(dest, { video: { url: videoUrl }, caption: varmess });
    console.log("Video message sent successfully!");

    // Send WAV audio without MIME specification
    await zk.sendMessage(dest, { audio: wavBuffer });
    console.log("WAV audio message sent successfully!");
});

console.log("mon test WAV");
