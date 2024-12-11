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

    // Fetch user DP (Display Picture)
    try {
        const user = await zk.getUser(dest);
        const dpUrl = user.profilePicUrl; // Get the URL of the user's profile picture
        
        if (!dpUrl) {
            console.error("No profile picture found for the user.");
            return;
        }

        // Fetch the image (dpUrl could be a URL)
        const dpBuffer = await zk.fetch(dpUrl);  // Fetch the image from the URL
        
        // Send message with user DP
        await zk.sendMessage(dest, { image: dpBuffer, caption: varmess });
        console.log("Message with DP sent successfully!");
    } catch (error) {
        console.error("Error fetching DP:", error);
    }
});

console.log("mon test");
