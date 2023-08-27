import { compileFile } from "pug";
import { say } from "cowsay";
import express from "express";
import path from "path";

const PORT = 3000,
  createPath = (page) => path.resolve("view", `${page}.html`),
  app = express(),
  cow = say({ text: _text, e: eyes, T: tongue }),
  fn = compileFile("./t.pug");

app.listen(PORT);

// app.get("/", function (req, res) {
//   res.send(fn({ cow }));
// });
app.use(express.static("styles"));

app.get("/", function (req, res) {
  res.sendFile(createPath("index"));
});

app.get("/add-cow", function (req, res) {
  res.sendFile(createPath("add-cow"));
});

app.get("/t", function (req, res) {
  res.send(fn({ cow }));
});

app.post("/add-cow", (req, res) => {
  const { eyes, tongue, _text } = req.body;
  const _post = {
    eyes,
    tongue,
    _text,
  };
  res.send(createPath("t"), { _post });
});
