const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('./client/build'))

app.get('*', (req, res) => {
  res.send(__dirname + '/client/build/index.html')
})

app.listen(port, () => {
  console.log('listneing on port ' + port)
})
