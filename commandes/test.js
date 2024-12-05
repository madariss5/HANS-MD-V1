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

    // Local audio file path (WAV format)
    let audioPath = path.join(__dirname, "../media/test.wav");

    // Check if the audio file exists
    if (!fs.existsSync(audioPath)) {
        console.error("Audio file not found at:", audioPath);
        return;
    }

    // Read the local audio file
    let audioBuffer = fs.readFileSync(audioPath);

    // Send video with caption
    await zk.sendMessage(dest, { video: { url: videoUrl }, caption: varmess });
    console.log("Video message sent successfully!");

    // Send audio with caption
    await zk.sendMessage(dest, { 
        audio: audioBuffer, 
        mimetype: 'audio/wav', // MIME type for WAV files
        caption: "Here is your WAV audio file!" 
    });
    console.log("Audio message sent successfully!");
});

console.log("mon test");
