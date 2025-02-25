const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0J4bHFCclR1SXRYUFdYQjNQQkRZbk9SK1RUajIreFRVN0ZYRDJ6OVdXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDdYRm1EWHBUeWx4NEZLNWxaVThzQ1VhdlJIZWpyZkpIS3pjNGVTS0VIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUFd5V0FxV0ZUUkJVUkI0MlFicEVlci9GVEFBT2tRcUhnSUIxZDZqS0c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZi94NHBqOW5GTk9qbmZYUlh0eWQ4UFQyNk5nR2JHMXNBdzMrV2J1UW40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBMk5MdlRMeUhqT1JIbEcyRjVMYm53c0xoS1lKVS82U3k4K1pvVzJzM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp3b1crSkJzOTdWMDFaTFZvWk43WjEySmhVWWpySHhoVTRXaVdLMWdsQVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJSWmF1eXVZcnlnc1Q0QmVQb3JnNnVkVUJqcGVFQUw0dzQ5a1pCUnBsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRhTXVkY1BIYW9nMlB6YTE2bUw5dXlpY2VpV3dJN1pkcnhpS1BndFNnaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZWSEk0M3orbGdabGJYM2d1WUh1TmljT3pJNXBib2RBQ2x1b2J5eHhZZUFQbUFpdFRWM3l1TDREdTI2ZGFlNzRIdnY0NmFRZWhWRUlqUmhEL292MEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiSnp6aWQwMFNXYkpzQU9sakdJM21Uekt4ZGdhNEhZWFlKRld4UUJZZVQ5Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI0OTE1NTYyMzc4MzQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMzOTI0QUQ3NDEyNENBRDVCMjQ5ODNGRDdBNUMxN0YyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDA0OTQyNjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTlDN0I3RUE4MjQ2M0M4MkQzN0Q1Njg4N0Y4RjhFQUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MDQ5NDI2NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDkxNTU2MjM3ODM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMzI0QjZBODhEOUYxRTk4NDMzQTZFNDkxMjM4REM3MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQwNDk0MjY4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3VTdUZGlBRlM3bXRXWWczTTVkM0d3IiwicGhvbmVJZCI6ImYwNjA1NmNkLTM1MmYtNGZjYi04ZTEzLWY0ODY0ZTc3ODM0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUGlIR2hmS2lkYklkM0tUTGw0Rk5BeXcvS289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0J3djRSV0IxWllBUFJFODdXWDZENGJQeDBnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJTQjhLTEJEIiwibWUiOnsiaWQiOiI0OTE1NTYyMzc4MzQzOjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhZGR5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMalB5UzBRcXF2M3ZRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3MlYxMWxJWnZhbEp2RjI2MmJNWHczNG5LZ1JOOUtvM0NPZ3crNEg0ZVJzPSIsImFjY291bnRTaWduYXR1cmUiOiJFZ3hvcW03QzVpdHhZRkZla0d4ZmZNa09PSkVVLzBQVVVMbkRWUVNNeUhaZDFvNzNITDF5SDlVN1JzZWprZTVPWktodHZmbElFMjBtV0ZnTkdvRUlDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOWFhY1dJNkh3eHUwbVVkN0wwMWtNUmRSMWdCRGdvQzFWU3I0QnhXckxUT2VIV2t5eWdTVWMzeWdtdkhIbExkQWpScVhySThnNUgzaTRSUzRxZ0xmQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0OTE1NTYyMzc4MzQzOjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmU5bGRkWlNHYjJwU2J4ZHV0bXpGOE4rSnlvRVRmU3FOd2pvTVB1QitIa2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDA0OTQyNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWRlIn0",
  'PREFIXE': process.env.PREFIX || '.',
  'OWNER_NAME': process.env.OWNER_NAME || "Martin",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "4915563151347",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  'URL': process.env.BOT_MENU_LINKS || "https://files.catbox.moe/3vzjsl.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'no',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "yes",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
