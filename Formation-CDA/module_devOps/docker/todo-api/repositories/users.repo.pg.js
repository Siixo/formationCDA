// repositories/users.repo.pg.js
const { pool } = require("./db");

// Liste tous les users
async function list() {
  const { rows } = await pool.query(
    "SELECT username, password FROM users ORDER BY username ASC"
  );
  return rows;
}

// Lire par username
async function getByUsername(username) {
  const { rows } = await pool.query(
    "SELECT username, password FROM users WHERE username = $1",
    [username]
  );
  return rows[0] || null;
}

// Créer
// data attendu: { username, password }
async function create(user) {
  const { username, password } = user;
  const { rows } = await pool.query(
    `INSERT INTO users (username, password)
     VALUES ($1, $2)
     RETURNING username, password`,
    [username, password]
  );
  return rows[0];
}

// Mettre à jour (champs optionnels; ne change que ce qui est fourni)
async function update(username, patch) {
  // Construit dynamiquement SET …
  const sets = [];
  const values = [];
  let i = 1;

  if (patch.username !== undefined) {
    sets.push(`username = $${i++}`);
    values.push(patch.username);
  }
  if (patch.password !== undefined) {
    sets.push(`password = $${i++}`);
    values.push(patch.password);
  }

  // Rien à mettre à jour
  if (sets.length === 0) {
    // Renvoie l’état actuel
    return getByUsername(username);
  }

  // WHERE original username en dernier param
  values.push(username);

  const { rows } = await pool.query(
    `UPDATE users
     SET ${sets.join(", ")}
     WHERE username = $${i}
     RETURNING username, password`,
    values
  );

  return rows[0] || null;
}

// Supprimer
async function remove(username) {
  const { rowCount } = await pool.query(
    "DELETE FROM users WHERE username = $1",
    [username]
  );
  return rowCount > 0;
}

module.exports = { list, getByUsername, create, update, remove };
