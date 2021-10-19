var express = require("express")

var app = express()
const validateQuery = (fields) =>
  (req, res, next) => {
    var isFieldMissing = false
    fields.forEach((field) => {
      if(!req.query[field]) {
        isFieldMissing = true
        return res
          .status(400)
          .send(`${field} is missing`)
      }
    })
    !isFieldMissing && next()
  }
app.get('/newsletter', validateQuery(['name', 'email']), (req, res) => {
  res.json(req.query)
})
app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000")
})
