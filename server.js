const express = require("express");

const app = express();
const PORT = 3000;

app.use(express());

app.listen(PORT, () => {
  console.log("The server is started ", 3000);
});
