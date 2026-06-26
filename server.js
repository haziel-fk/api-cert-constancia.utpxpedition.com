const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const documentos = {
  "871144c5-d38f-4f7f-9b7b-1b1039015061": "documento.pdf"
};

app.get("/qr/constancias/:id", (req, res) => {
  const id = req.params.id.replace(".pdf", "");

  const file = documentos[id];

  if (!file) {
    return res.status(404).send("Documento no encontrado");
  }

  const filePath = path.join(__dirname, "pdfs", file);

  const pdf = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
});

app.listen(3000, () => {
  console.log("Servidor listo en http://localhost:3000");
});