const { zokou } = require("../framework/zokou");

const isHackCommandEnabled = true; // Enable/Disable the prank

zokou({ nomCom: "long_hack", categorie: "General", reaction: "⚠️", active: isHackCommandEnabled }, async (dest, zk, commandeOptions) => {
  const { arg, repondre } = commandeOptions;

  // Step 1: Initialization
  await zk.sendMessage(dest, "⚠️ *Initializing Hans TZ hacking protocol...*");
  await sleep(5000); // Wait for 5 seconds

  await zk.sendMessage(dest, "⚡ *Injecting malicious code into the system...*");
  await sleep(10000); // Wait for 10 seconds

  await zk.sendMessage(dest, "🔓 *Cracking passwords...*");
  await sleep(12000); // Wait for 12 seconds

  await zk.sendMessage(dest, "💻 *Scanning network...*");
  await sleep(8000); // Wait for 8 seconds

  await zk.sendMessage(dest, "⚠️ *Warning: Weak security detected... Proceeding with breach.*");
  await sleep(10000); // Wait for 10 seconds

  // Step 2: Progress messages (10% to 100% in smaller increments)
  for (let i = 1; i <= 100; i++) {
    const progressBar = '█'.repeat(Math.floor(i / 10));
    const message = `📂 *Extracting sensitive files: ${i}%* ${progressBar}`;
    
    if (i === 25) {
      await zk.sendMessage(dest, "⚠️ *Breaching firewalls... Progress: 25%.*");
    } else if (i === 50) {
      await zk.sendMessage(dest, "⚠️ *Gaining access to hidden files... Progress: 50%.*");
    } else if (i === 75) {
      await zk.sendMessage(dest, "⚠️ *Decrypting secure databases... Progress: 75%.*");
    } else if (i === 100) {
      await zk.sendMessage(dest, `${message}\n⚠️ *HACKING SYSTEM COMPLETE: ALL DATA DONE. SYSTEM FULLY COMPROMISED.*`);
    } else {
      await zk.sendMessage(dest, message);
    }

    await sleep(6000); // Wait for 6 seconds each time
  }

  // Step 3: Advanced hacking and system manipulation
  await zk.sendMessage(dest, "⚠️ *Warning: Firewall detected! Neutralizing defenses...*");
  await sleep(12000); // Wait for 12 seconds

  await zk.sendMessage(dest, "💣 *Deploying payload to compromise remaining systems...*");
  await sleep(15000); // Wait for 15 seconds

  await zk.sendMessage(dest, "📡 *Hacking into system servers...*");
  await sleep(10000); // Wait for 10 seconds

  await zk.sendMessage(dest, "🛠️ *Bypassing system restrictions...*");
  await sleep(12000); // Wait for 12 seconds

  await zk.sendMessage(dest, "🔐 *Gaining full system access...*");
  await sleep(8000); // Wait for 8 seconds

  // Step 4: WhatsApp chat extraction (new series of progress messages)
  for (let i = 1; i <= 100; i++) {
    const progressBar = '█'.repeat(Math.floor(i / 10));
    const message = `💬 *Extracting WhatsApp chat history: ${i}%* ${progressBar}`;

    if (i === 25) {
      await zk.sendMessage(dest, "⚠️ *Breach detected! Deleting suspicious files... Progress: 25%.*");
    } else if (i === 50) {
      await zk.sendMessage(dest, "⚠️ *Accessing encrypted chat logs... Progress: 50%.*");
    } else if (i === 75) {
      await zk.sendMessage(dest, "⚠️ *Clearing system traces... Progress: 75%.*");
    } else if (i === 100) {
      await zk.sendMessage(dest, `${message}\n⚠️ *ALL WHATSAPP CHATS COMPROMISED. NO TRACE LEFT.*`);
    } else {
      await zk.sendMessage(dest, message);
    }

    await sleep(6000); // Wait for 6 seconds each time
  }

  // Step 5: Final system clean-up and conclusion
  await zk.sendMessage(dest, "🛑 *Destroying all evidence...*");
  await sleep(10000); // Wait for 10 seconds

  await zk.sendMessage(dest, "✅ *Hacking operation completed by Hans TZ!*");
  await sleep(5000); // Wait for 5 seconds

  await zk.sendMessage(dest, "💥 *All files successfully transferred, and system disconnected.*");
  await sleep(5000); // Wait for 5 seconds

  return zk.sendMessage(dest, "*ALL DATA SUCCESSFULLY COMPROMISED BY HANS TZ. NO TRACE LEFT.*");
});

// Sleep utility
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
