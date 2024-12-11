const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
╔═════━━─━─➳
║*𝑶𝑾𝑵𝑬𝑹* : ${s.OWNER_NAME}
║*𝑴𝑶𝑫𝑬* : ${mode}
║*𝑫𝑨𝑻𝑬* : ${date}
║*𝑯𝑶𝑼𝑹𝑺(𝑮𝑴𝑻)* : ${temps}
║*𝑭𝑹𝑶𝑴* : Tanzania
║*𝑩𝑶𝑻* : ${s.bot} 
║*𝑭𝑶𝑹𝑲𝑺* : ${forks} 
║*𝑼𝑺𝑬𝑹* : ${nomAuteurMessage}
╚═━━══━━─━─➳
 ${message}
 
 
 *HANS MD 2025*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("Hellow 👋 Am alive 24hr and more than 👋😃") ; return};

      await   repondre("You have not yet saved your alive, to do this;  enter after alive your message and your image or video link in this context: .alive message;lien");
         repondre("don't do fake thinks :)")
     }
 } else {

    if(!superUser) { repondre ("🛑STOP IT ONLY THE OWENER OR HANS CAN MODIFY THE ALIVE") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre('  HANS-MD Is alive any time keep using. ')

}
    });
