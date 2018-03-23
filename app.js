const express = require("express")
let app = express();

app.get('/',(req, rsp) => {
  rsp.send("Welcome");
})

app.listen(3000, () => {
  console.log("Open at localhost: 3000");
});

module.exports = app;