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

    // Get user profile picture (DP) URL
    const profilePicUrl = await zk.getProfilePicture(dest); // Fetch the user's profile picture URL

    if (!profilePicUrl) {
        console.error("Could not fetch the user's profile picture.");
        return;
    }

    // Send the user's DP as an image with the message
    await zk.sendMessage(dest, { image: { url: profilePicUrl }, caption: varmess });
    console.log("Profile picture sent successfully!");
});

console.log("mon test avec user profile picture");
