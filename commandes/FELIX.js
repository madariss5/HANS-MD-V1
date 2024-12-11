const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "Menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╔═━━━━════━━━─━─➳
┊🔹╔═─➳*𝑯𝑨𝑵𝑺-𝑴𝑫*━─━─➳
┊🔹┊*𝐔𝐬𝐞𝐫*  : ${s.OWNER_NAME}
┊🔹┊*𝐌𝐨𝐝𝐞* : ${mode}
┊🔹┊*𝐓𝐢𝐦𝐞*  : ${temps}  
┊🔹┊*User*  : ${nomAuteurMessage}
┊🔹╚═━━━════━━─━─➳
╚═━━━━════━━━─━─➳ \n\n`;
 
    let menuMsg=`  
  *𝑯𝑨𝑵𝑺-𝐌𝐃-𝑨𝑳𝑳-𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*
`;

    for (const cat in coms) {
        menuMsg += `*╔═─➳* *${cat}`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┊💱* ${cmd}`;
        }
        menuMsg += `
*╚═━━━══━━━─━─➳* \n`
    }

    menuMsg += `
    
   ╔═━━━━━═══━━━─━─➳
   ║Hi 👋 ${nomAuteurMessage}
   ╚═━━━━━━══━━━─━─➳
    > ᴍᴀᴅᴇ ʙʏ ʜᴀɴsᴛᴢ 
    `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Hans-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*hanstz*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
