// repositories/users.repo.js
const users = require("../data/users.json"); // [{ username, password }, ...]

// Liste
function list() {
  return users;
}

// Lire par username
function getByUsername(username) {
  return users.find(u => u.username === username) || null;
}

// Créer (objet attendu: { username, password })
function create(user) {
  users.push(user);
  return user;
}

// Mettre à jour (seuls username/password existent dans ta data)
function update(username, patch) {
  const index = users.findIndex(u => u.username === username);
  if (index === -1) return null;

  const user = users[index];

  if (patch.username !== undefined) {
    user.username = patch.username;
  }
  if (patch.password !== undefined) {
    user.password = patch.password;
  }

  users[index] = user;
  return user;
}

// Supprimer
function remove(username) {
  const index = users.findIndex(u => u.username === username);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
}

module.exports = { list, getByUsername, create, update, remove };