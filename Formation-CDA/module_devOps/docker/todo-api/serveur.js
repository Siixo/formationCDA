const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const todosRouter = require("./routes/todos.routes.js");

app.use("/todos", todosRouter);

const userRouter = require("./routes/user.routes.js");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`✅ API en écoute sur http://localhost:${PORT}`);
});

require("dotenv").config();