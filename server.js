const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 RUTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("Servidor de constancias activo ✔");
});

// 🔥 SERVIR PDFS
app.use("/pdfs", express.static(path.join(__dirname, "pdfs")));

app.listen(PORT, () => {
  console.log("Servidor listo en puerto", PORT);
});