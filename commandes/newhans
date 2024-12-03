const { zokou } = require("./../framework/zokou");

zokou(
  {
    nomCom: "randomdog",
    categorie: "Fun",
    reaction: "🐕",
    alias: ["dog", "pup"]
  },
  async (dest, zk) => {
    try {
      const fetch = require("node-fetch");
      let res = await fetch("https://random.dog/woof.json");
      let json = await res.json();
      
      // Check if the response contains a valid URL
      if (json && json.url) {
        await zk.sendMessage(dest, {
          video: json.url.endsWith(".mp4") ? { url: json.url } : undefined,
          image: json.url.endsWith(".jpg") || json.url.endsWith(".png") ? { url: json.url } : undefined,
          caption: `Powered by Hans | Enjoy this random dog! 🐶`
        });
      } else {
        await zk.sendMessage(dest, { text: "Couldn't fetch a random dog image/video. Try again!" });
      }
    } catch (error) {
      await zk.sendMessage(dest, { text: `Error: ${error.message}` });
    }
  }
);
