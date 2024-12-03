const { Pool } = require("pg");

const s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "your_database_url_here";
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

// Create PostgreSQL pool connection
const pool = new Pool(proConfig);

// Add or update antitag message and URL
async function addOrUpdateAntitag(id, message, lien) {
  try {
    await pool.query(`
      INSERT INTO antitag (id, message, lien)
      VALUES ($1, $2, $3)
      ON CONFLICT (id)
      DO UPDATE SET message = $2, lien = $3;
    `, [id, message, lien]);

    console.log("Antitag has been added or updated successfully.");
  } catch (e) {
    console.error("An error occurred while adding or updating the antitag:", e);
  }
}

// Change antitag state (e.g., on or off)
async function changeAntitagState(id, etat) {
  try {
    const result = await pool.query(`
      UPDATE antitag
      SET etat = $1
      WHERE id = $2
      RETURNING *;
    `, [etat, id]);

    if (result.rows.length === 0) {
      console.log("The antitag record does not exist.");
      return "not defined";
    } else {
      console.log("The antitag state has been updated successfully.");
      return "succes";
    }
  } catch (e) {
    console.error("An error occurred while changing the antitag state:", e);
  }
}

module.exports = {
  addOrUpdateAntitag,
  changeAntitagState,
};
