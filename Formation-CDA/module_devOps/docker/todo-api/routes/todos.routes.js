const router = require("express").Router();

const todos = require("../data/todos.json");

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));

  if(!todo){
    return res.status(404).json({ error: "Todo non trouvé"});
  }
  res.json(todo);
} )

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;

  // Cherche le todo par id
  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: "Todos non trouvé" });
  }

  // Met à jour uniquement les champs envoyés
  if (title !== undefined) todo.title = title;
  if (done !== undefined) todo.done = done;

  res.json(todo);
}); 

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Le champ 'title' est requis" });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    done: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(t => t.id === parseInt(id));//recup l'id
  const deletedTodo = todos.splice(todoIndex, 1);

  res.json({msg : "Élément supprimé"});
});

module.exports = router;