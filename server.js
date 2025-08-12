const express = require("express");
const todoRoutes = require("./routes/todoRoutes.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is started ", 3000);
});
