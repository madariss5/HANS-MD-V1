const { zokou } = require("../framework/zokou");
const { ajouterOuMettreAJourJid, mettreAJourAction, verifierEtatJid } = require("../bdd/antigifm");
const { Sticker, StickerTypes } = require('wa-sticker-formatter'); 
const { default: axios } = require('axios');

// Define the Antigif feature
zokou({ nomCom: "antigifs", categorie: 'Group', reaction: "😡" }, async (dest, zk, commandeOptions) => {

  var { repondre, arg, verifGroupe, superUser, verifAdmin } = commandeOptions;

  if (!verifGroupe) {
    return repondre("*for groups only*");
  }
  
  if (superUser || verifAdmin) {
    const enetatoui = await verifierEtatJid(dest);

    try {
      if (!arg || !arg[0] || arg === ' ') {
        repondre("antigif on to activate the anti-GIF feature\nantigif off to deactivate the anti-GIF feature\nantigif action/remove to directly remove the GIF without notice\nantigif action/warn to give warnings\nantigif action/delete to remove the GIF without any sanctions\n\nPlease note that by default, the anti-GIF feature is set to delete.");
        return;
      }

      if (arg[0] === 'on') {
        if (enetatoui) {
          repondre("The antigif feature is already activated for this group.");
        } else {
          await ajouterOuMettreAJourJid(dest, "oui");
          repondre("The antigif feature has been activated successfully.");
        }

      } else if (arg[0] === "off") {
        if (enetatoui) {
          await ajouterOuMettreAJourJid(dest, "non");
          repondre("The antigif feature has been successfully deactivated.");
        } else {
          repondre("Antigif is not activated for this group.");
        }

      } else if (arg.join('').split("/")[0] === 'action') {
        let action = (arg.join('').split("/")[1]).toLowerCase();

        if (action === 'remove' || action === 'warn' || action === 'delete') {
          await mettreAJourAction(dest, action);
          repondre(`The anti-GIF action has been updated to ${action}.`);
        } else {
          repondre("The only actions available are warn, remove, and delete.");
        }

      } else {
        repondre("antigif on to activate the anti-GIF feature\nantigif off to deactivate the anti-GIF feature\nantigif action/remove to directly remove the GIF without notice\nantigif action/warn to give warnings\nantigif action/delete to remove the GIF without any sanctions\n\nPlease note that by default, the anti-GIF feature is set to delete.");
      }

    } catch (error) {
      repondre(error);
    }

  } else {
    repondre('You are not authorized to use this command.');
  }

});

// Detect GIF and take action based on the settings
zokou({ nomCom: "detectgif", categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  var { repondre, verifGroupe, superUser, verifAdmin } = commandeOptions;

  if (!verifGroupe) {
    return repondre("*for groups only*");
  }

  const enetatoui = await verifierEtatJid(dest);
  const action = await verifierEtatJid(dest); // Retrieve the current action (remove/warn/delete)

  if (enetatoui) {
    // Check if the message is a GIF
    if (zk.type === 'video' && zk.mimetype === 'video/mp4' && zk.caption && zk.caption.includes('gif')) {
      if (action === 'remove') {
        // Remove the GIF message directly
        zk.delete();
        repondre("The GIF has been removed.");
      } else if (action === 'warn') {
        // Send a warning
        repondre("Warning: GIFs are not allowed in this group.");
      } else if (action === 'delete') {
        // Delete the GIF message with no further action
        zk.delete();
        repondre("The GIF has been deleted.");
      }
    }
  }
});
