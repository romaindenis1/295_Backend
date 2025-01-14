import express from "express";
const app = express();
const port = 3000;

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
