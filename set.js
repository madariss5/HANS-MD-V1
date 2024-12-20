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
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZRNHZUOUE0bk9RQ0pHdEdWcWJ1TkN0QW1LcGsrZWsrSXArdXpYUW9GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3ZwcDZ0VFlGeXhTRW45VU1oRzhKbUc3eWJVdkU5YUJhWUQ2SmVuM0JVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQTBReEEwY2sxOWhpWkc5MWZSU1pPeWdGdU42Yk1URmQwUitmN3BHdG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNEhLZ0tTVGlLbkVSb0RlZm54UG1xS2pNTnY0YkNUUWd0OU11WWNqbGxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMdUNoT2poVkZxaU1Wc016T2lwd3N2VXVISDJ3OTJFUmVRUU9ZRVl6M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx4aEN4TVJpYVowbi9IbEo2RXBBMWlNaXljNlZYc0t0VW5teGhEVjZBV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tNUC9RdFJBZnBQQUxGR0FWWnFQSkh1L1VXR2FIaC84akVhR3VjSElrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVIQ1ovQmZVdjRib1k1OEFoRDU3SG5RL2xJQXdhRFNQZnB5YWd0STB4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5KVlRJMHB0WWQ5cVI5NU9OR200NThRaS9XNXhlVGZDUHN3V3RqaWZyT1pES2JjSGdtT0h5aVlDeTVGWVh2L0dVYnVWWjVtNDRtbXVJcFJTWm1tbUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJibWtEZ21FaDlCbWh3bnBrdTZCMUdkaTBBM0VyWFJIZjQzMklqaFNsTUpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyUWRSSExreFFYLWowZ3c3QmhUaXR3IiwicGhvbmVJZCI6IjRjNmQwMWQyLTkwYzYtNDFmNC05ODIyLTYzZmExNDU3NzNkYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWEhhQ0M4M25uakxxVGc2a2hKaUVIWjI2c009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjZ2bFhoYkRqWmV4VGh5eGlnNzI3UVgzSDBVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE3UFlCQjUzIiwibWUiOnsiaWQiOiIyNTU3NTY1MzAxNDM6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liRDk4UUJFSlhkbDdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNMeEwvajRvYUIwS0xpOE5BMzcxZFByMGZiWU5jdHFNN1IyK3pLekRVVEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlEyV0NNMU1laExieWZSV1dQVm8yMm9TMGhzUXhEbmxNdGJPT1JiWG1ZUjg4TENidDVhcVBSbHRsTy85M2VKWEVLK0Q0dndCT0oxbVlNSUZVUEV4YURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCMWN0RnN2endhMGRLd0FrcXRSUWJJdGZBN3RNQW1qR01kcUtxQmtVaElUMUk1K1I5T0d5NWE3R2FVRlQzRDR6aDUvc1F1TVdlQllsUzlDWEMxb2xEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc1NjUzMDE0MzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiQzhTLzQrS0dnZENpNHZEUU4rOVhUNjlIMjJEWExhak8wZHZzeXN3MUV4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NzMzNDc1fQ==",
  'PREFIXE': process.env.PREFIX || '.',
  'OWNER_NAME': process.env.OWNER_NAME || "hanstz",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "255756530143",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "HANS MD",
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