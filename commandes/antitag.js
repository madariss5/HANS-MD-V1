const { zokou } = require("../framework/zokou");
const antitagfunc = require("../bdd/antitag"); // Assuming you have an antitag-related function file.

zokou({
  nomCom: 'antitag',
  categorie: 'mods',
}, async (dest, zk, commandeOptions) => {

  const { ms, repondre, superUser, arg } = commandeOptions;

  // Check if the user is a superUser
  if (!superUser) {
    repondre('You are not allowed to use this command');
    return;
  }

  if (!arg[0]) {
    // If no arguments are provided, toggle antitag on
    let result = await antitagfunc.changeAntitagState(1, "on");

    if (result === "not defined") {
      repondre("Antitag is not defined yet. Please set up a message before activating.");
    } else {
      await antitagfunc.changeAntitagState(1, "on");
      repondre("Antitag has been activated.");
    }
  } else {
    try {
      let text = [];
      let url = "no url";

      // Parse the arguments for setting up the antitag
      arg.forEach(element => {
        if (element.endsWith(".jpg") || element.endsWith(".png") || element.endsWith(".jpeg")) {
          url = element;
        } else if (element != undefined) {
          text.push(element);
        }
      });

      // Save or update the antitag message and link (if provided)
      await antitagfunc.addOrUpdateAntitag(1, text.join(" "), url);

      repondre("Antitag has been saved. Type the command again to activate it.");
    } catch (error) {
      console.log(error);
      repondre("An error occurred while saving the antitag message.");
    }
  }
});
