var express = require("express");

var app = express();
app.use(express.json());
app.get("/newsletter", (req, res, next) => {

  console.log(req.query);
  res.json(req.query);
 });

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000");
});
