var express = require("express");

var app = express();
app.use(express.json());
app.post("/contact", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
 });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
