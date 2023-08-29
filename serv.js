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

app.use(express.static('public'));

app.get("/", (req, res) => {
  let cow = cowSay();
  res.send(fn({ cow }));
});

app.use("/", bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { eyes, tongue, text } = req.body;
  let cow = cowSay(text, eyes, tongue);
  res.send(fn({ cow }));
});

let cowSay = (_text = TEXT, _eyes = EYES, _tongue = TONGUE) => {
  return say({ text: _text, e: _eyes, T: _tongue });
};
