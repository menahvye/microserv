const express = require('express');
const app = express();
const proxy = require("express-http-proxy")

app.use("/api", proxy("http://localhost:3000"))

// app.use("/api/register", proxy("http://localhost:8081"))

app.listen(5000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});