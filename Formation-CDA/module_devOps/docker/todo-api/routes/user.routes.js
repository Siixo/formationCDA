const router = require("express").Router();
const repo = require("../repositories/users.repo.pg");


// GET /users
router.get("/", (req, res) => {
  res.json(repo.list());
});

// GET /users/:username
router.get("/:username", (req, res) => {
  const user = repo.getByUsername(req.params.username);
  res.json(user);
});

// POST /users
router.post("/", (req, res) => {
  const user = repo.create(req.body);
  res.status(201).json(user);
});

// PUT /users/:username
router.put("/:username", (req, res) => {
  const updated = repo.update(req.params.username, req.body);
  res.json(updated);
});

// DELETE /users/:username
router.delete("/:username", (req, res) => {
  const ok = repo.remove(req.params.username);
  res.json({ deleted: ok });
});

module.exports = router;