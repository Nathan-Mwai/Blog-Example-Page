import "dotenv/config";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

const PORT = 4000 || process.env.PORT;

//Middlewares
app.use(expressEjsLayouts);
app.set('layout', './layouts/main')
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});