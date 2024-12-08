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

    // Paths for media files
    let videoUrl = 'https://files.catbox.moe/sgtk23.mp4';
    let photoPath = path.join(__dirname, "../media/king.jpeg");

    // Check if the photo file exists
    if (!fs.existsSync(photoPath)) {
        console.error("Photo file not found at:", photoPath);
        return;
    }

    // Read the local photo file
    let photoBuffer = fs.readFileSync(photoPath);

    // Send video with caption and an image preview
    await zk.sendMessage(dest, { 
        video: { url: videoUrl }, 
        caption: varmess, 
        jpegThumbnail: photoBuffer // Add the image as a thumbnail
    });
    console.log("Combined message with video and photo preview sent successfully!");
});

console.log("mon test");
