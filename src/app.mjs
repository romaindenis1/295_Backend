import express from "express";
import { sequelize, initDb } from "./db/sequelize.mjs";

const app = express();
const port = 3000;

app.use(express.json());

//Default
app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

//redirige /api/ vers localhost 3000
app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

//prend la methode de products
import { productsRouter } from "./routes/products.mjs";

//dire que ca marche
app.use("/api/products", productsRouter);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de données a bien été établie")
  )
  .catch((error) => console.error("Impossible de se connecter à la DB"));

initDb();
