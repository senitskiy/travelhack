const app = require('./app')
const port = process.env.PORT || 8081
const express = require('express')
const path = require('path')


// Serve only the static files form the build directory
app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log(`server is listening on ${port}...`)
})
