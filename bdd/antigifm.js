require("dotenv").config();
const { Pool } = require("pg");
let s = require("../set");
var dbUrl = s.DATABASE_URL ? s.DATABASE_URL : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9";

const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

// Fonction pour créer la table "gif_detect" (table dédiée à la détection des GIFs)
async function createGifDetectTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS gif_detect (
        gif_id SERIAL PRIMARY KEY,
        gif_url TEXT NOT NULL,
        gif_type TEXT,
        detected BOOLEAN DEFAULT FALSE,
        action TEXT DEFAULT 'none'
      );
    `);
    console.log("La table 'gif_detect' a été créée avec succès.");
  } catch (error) {
    console.error("Une erreur est survenue lors de la création de la table 'gif_detect':", error);
  } finally {
    client.release();
  }
}

// Appeler la fonction pour créer la table 'gif_detect'
createGifDetectTable();

// Fonction pour ajouter ou mettre à jour une détection de GIF
async function ajouterOuMettreAJourGif(gifUrl, gifType) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM gif_detect WHERE gif_url = $1', [gifUrl]);
    const gifExiste = result.rows.length > 0;

    if (gifExiste) {
      // Mettre à jour si le GIF existe déjà
      await client.query('UPDATE gif_detect SET gif_type = $1, detected = TRUE WHERE gif_url = $2', [gifType, gifUrl]);
    } else {
      // Ajouter un nouveau GIF si non trouvé
      await client.query('INSERT INTO gif_detect (gif_url, gif_type, detected) VALUES ($1, $2, TRUE)', [gifUrl, gifType]);
    }

    console.log(`GIF ajouté ou mis à jour avec succès: ${gifUrl}`);
  } catch (error) {
    console.error('Erreur lors de l\'ajout ou mise à jour du GIF:', error);
  } finally {
    client.release();
  }
}

// Fonction pour mettre à jour l'action d'un GIF (par exemple, marquer un GIF pour suppression ou un autre type d'action)
async function mettreAJourActionGif(gifUrl, action) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM gif_detect WHERE gif_url = $1', [gifUrl]);
    const gifExiste = result.rows.length > 0;

    if (gifExiste) {
      // Mettre à jour l'action pour le GIF existant
      await client.query('UPDATE gif_detect SET action = $1 WHERE gif_url = $2', [action, gifUrl]);
    } else {
      // Si le GIF n'existe pas, ajouter une nouvelle entrée avec l'action donnée
      await client.query('INSERT INTO gif_detect (gif_url, gif_type, action) VALUES ($1, $2, $3)', [gifUrl, 'unknown', action]);
    }

    console.log(`Action mise à jour pour le GIF: ${gifUrl}`);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'action pour le GIF:', error);
  } finally {
    client.release();
  }
}

// Fonction pour vérifier si un GIF est détecté (par exemple, vérifier si le champ 'detected' est TRUE)
async function verifierDetectionGif(gifUrl) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT detected FROM gif_detect WHERE gif_url = $1', [gifUrl]);

    if (result.rows.length > 0) {
      return result.rows[0].detected === true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de la détection du GIF:', error);
    return false;
  } finally {
    client.release();
  }
}

// Fonction pour récupérer l'action associée à un GIF
async function recupererActionGif(gifUrl) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT action FROM gif_detect WHERE gif_url = $1', [gifUrl]);

    if (result.rows.length > 0) {
      return result.rows[0].action;
    } else {
      return 'none';
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'action du GIF:', error);
    return 'none';
  } finally {
    client.release();
  }
};

module.exports = {
  ajouterOuMettreAJourGif,
  mettreAJourActionGif,
  verifierDetectionGif,
  recupererActionGif,
};