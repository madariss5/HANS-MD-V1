const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '🚀',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    const start = new Date().getTime();
    const msg = await zk.sendMessage(dest, {
      text: '*𝑯𝒂𝒏𝒔 𝒎𝒅 𝒕𝒆𝒔𝒕𝒊𝒏𝒈 𝒑𝒊𝒏𝒈....*',
    }, {
      quoted: ms
    });
    const end = new Date().getTime();
    const ping = end - start;
    await zk.sendMessage(dest, {
      text: `*𝑺𝒑𝒆𝒆𝒅...*
 *${ping} 𝑴𝑺*`, edit: {
        id: msg.key.id, remoteJid: dest
      }});
    await zk.sendMessage(dest, {
      react: {
        text: "⚙️", key: ms.key
      }})