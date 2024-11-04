import express from "express";
import productsRouter from "./routes/prooducts/index";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!Express");
});

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
