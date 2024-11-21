zokou({ nomCom: "dog", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");

   async (m) => {
      try {
         const fetch = require("node-fetch");
         let res = await fetch('https://random.dog/woof.json')
         let json = await res.json()
         if (json.status) return await m.reply("*Request Denied!*")
         m.bot.sendFileUrl(m.jid, json.url, "", m, { author: "Asta-Md" }, "video");

      } catch (e) { m.error(`${e}\n\nCommand: dog`, e, false) }
   })