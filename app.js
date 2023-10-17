import express from "express";
const app = express();
const port = "3000";
app.get("/as", function (req, res) {
  res.end("Hello Students!!!");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
