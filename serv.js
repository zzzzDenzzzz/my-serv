import { compileFile } from "pug";
import { say } from "cowsay";
import express from "express";
import bodyParser from "body-parser";

const PORT = 3000,
  app = express(),
  fn = compileFile("./t.pug"),
  TEXT = "Mu-u-u-u-u!!!",
  EYES = "OO",
  TONGUE = "U";

app.listen(PORT);

app.get("/", (req, res) => {
  const cow = say({e: EYES, T: TONGUE, text: TEXT});
  res.send(fn({ cow }));
});

app.use("/", bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { eyes, tongue, text } = req.body;
  const cow = say({ text: text, e: eyes, T: tongue });
  res.send(fn({ cow }));
});
