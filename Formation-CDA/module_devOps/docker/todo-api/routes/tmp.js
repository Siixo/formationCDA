//Chargement des données en lecture seule depuis un fichier JSON

// app.put("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, done } = req.body;

//   // Cherche le todo par id
//   const todos = todos.find(t => t.id === parseInt(id));

//   if (!todos) {
//     return res.status(404).json({ error: "Todos non trouvé" });
//   }

//   // Met à jour uniquement les champs envoyés
//   if (title !== undefined) todos.title = title;
//   if (done !== undefined) todos.done = done;

//   res.json(todos);
// }); 

// app.post("/todos", (req, res) => {
//   const { title } = req.body;

//   if (!title) {
//     return res.status(400).json({ error: "Le champ 'title' est requis" });
//   }

//   const newTodo = {
//     id: todos.length + 1,
//     title,
//     done: false
//   };

//   todos.push(newTodo);
//   res.status(201).json(newTodo);
// });