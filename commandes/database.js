const { verifierEtatJid, ajouterOuMettreAJourJid, mettreAJourAction } = require('./commandes'); // Replace with your database integration

/**
 * Command Handler for Antisticker
 */
async function handleAntistickerCommand(dest, zk, commandeOptions) {
  const { repondre, arg, verifGroupe, superUser, verifAdmin } = commandeOptions;

  if (!verifGroupe) {
    return repondre("*This command is for groups only*");
  }

  if (superUser || verifAdmin) {
    const enetatoui = await verifierEtatJid(dest); // Check if antisticker is enabled for the group
    try {
      if (!arg || !arg[0] || arg === ' ') {
        repondre(
          "Usage of antisticker:\n" +
          "- `antisticker on`: Activate antisticker.\n" +
          "- `antisticker off`: Deactivate antisticker.\n" +
          "- `antisticker action/remove`: Remove stickers without notice.\n" +
          "- `antisticker action/warn`: Warn the sender.\n" +
          "- `antisticker action/delete`: Delete stickers silently (default).\n"
        );
        return;
      }

      if (arg[0] === 'on') {
        if (enetatoui) {
          repondre("Antisticker is already activated for this group.");
        } else {
          await ajouterOuMettreAJourJid(dest, "oui");
          repondre("Antisticker has been successfully activated.");
        }
      } else if (arg[0] === 'off') {
        if (enetatoui) {
          await ajouterOuMettreAJourJid(dest, "non");
          repondre("Antisticker has been successfully deactivated.");
        } else {
          repondre("Antisticker is not activated for this group.");
        }
      } else if (arg.join('').split("/")[0] === 'action') {
        const action = arg.join('').split("/")[1]?.toLowerCase();

        if (['remove', 'warn', 'delete'].includes(action)) {
          await mettreAJourAction(dest, action);
          repondre(`Antisticker action has been updated to: ${action}`);
        } else {
          repondre("Available actions are: `remove`, `warn`, `delete`.");
        }
      } else {
        repondre(
          "Usage of antisticker:\n" +
          "- `antisticker on`: Activate antisticker.\n" +
          "- `antisticker off`: Deactivate antisticker.\n" +
          "- `antisticker action/remove`: Remove stickers without notice.\n" +
          "- `antisticker action/warn`: Warn the sender.\n" +
          "- `antisticker action/delete`: Delete stickers silently (default).\n"
        );
      }
    } catch (error) {
      repondre(`Error: ${error.message}`);
    }
  } else {
    repondre("You do not have permission to use this command.");
  }
}

/**
 * Sticker Event Listener
 */
async function handleStickerMessage(message, zokou) {
  if (message.type === 'sticker') {
    // Retrieve group antisticker settings
    const enetatoui = await verifierEtatJid(message.chat);
    if (!enetatoui) return; // Antisticker is not enabled for this group

    const action = await getGroupAction(message.chat) || 'delete'; // Default to 'delete'

    // Delete the sticker
    await zokou.deleteMessage(message.chat, message.id);

    // Execute action based on settings
    if (action === 'warn') {
      await zokou.sendMessage(message.chat, {
        text: `⚠️ Warning: @${message.sender}, stickers are not allowed in this group.`,
        mentions: [message.sender],
      });
    } else if (action === 'remove') {
      await zokou.sendMessage(message.chat, {
        text: `🚫 The sticker sent by @${message.sender} has been removed.`,
        mentions: [message.sender],
      });
    } else if (action === 'delete') {
      await zokou.sendMessage(message.chat, {
        text: `🚫 Sticker deleted automatically.`,
        mentions: [message.sender],
      });
    }
  }
}

/**
 * Helper: Retrieve Group Action
 */
async function getGroupAction(chatId) {
  try {
    const result = await recupererActionJid(chatId); // Replace with your database call
    return result || 'delete'; // Default to 'delete'
  } catch (error) {
    console.error("Error fetching group action:", error);
    return 'delete';
  }
}

module.exports = {
  handleAntistickerCommand,
  handleStickerMessage,
};